import React, { useMemo, useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useTable, useSortBy } from "react-table";
import { studentColumns } from "../static/StudentTable";
import axios from "axios";

const Students = () => {
  const [studentData, setStudentData] = useState([]);

  const getStudentsData = async () => {
    await axios
      .get("http://localhost:8080/students")
      .then((response) => setStudentData(response.data))
      .finally(() => console.log(studentData));
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  const columns = useMemo(() => studentColumns, []);
  const data = useMemo(() => studentData, []);

  // creating table instance
  const TableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    TableInstance;

  return (
    <PageWrapper>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? "🔽"
                              : "🔼"
                            : ""}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Students;
