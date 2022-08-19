import React, { useMemo } from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useRowSelect } from "react-table";
import Checkbox from "./Checkbox";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const TableInstance = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "Selection",
            Header: ({ getToggleAllRowsSelectedProps }) => {
              return <Checkbox {...getToggleAllRowsSelectedProps()} />;
            },
            Cell: ({ row }) => {
              return <Checkbox {...row.getToggleRowSelectedProps()} />;
            },
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    footerGroups,
    // flat array of rows that are selected in table
    selectedFlatRows,
  } = TableInstance;

  const firstPagerows = rows.slice(0, 10);

  return (
    <div className="overflow-x-auto">
      <table className=" table table-zebra w-full" {...getTableProps()}>
        <thead className="text-center">
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {firstPagerows.map((row) => {
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

        <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => {
                  return (
                    <td {...column.getFooterProps()}>
                      {column.render("Footer")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
      <pre>
        <code>
          {JSON.stringify({
            selectedFlatRows: selectedFlatRows.map((row) => row.original),
          })}
        </code>
      </pre>
    </div>
  );
};

export default BasicTable;
