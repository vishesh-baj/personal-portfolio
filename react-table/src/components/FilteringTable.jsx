import React, { useMemo } from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFIlter";
const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //   for specifying default properties in column, when a propertty is same throughout the columns
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const TableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    footerGroups,
    // state contains several properties
    state,
    // setter for global filter
    setGlobalFilter,
  } = TableInstance;

  //    destructuring globalFilter from state
  const { globalFilter } = state;

  return (
    <div className="overflow-x-auto">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className=" table table-zebra w-full" {...getTableProps()}>
        <thead className="text-center">
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // COLUMN FILTER
                  //   <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  //     <div>
                  //       {column.canFilter ? column.render("Filter") : null}
                  //     </div>
                  //     <span>
                  //       {column.isSorted
                  //         ? column.isSortedDesc
                  //           ? "🔽"
                  //           : "🔼"
                  //         : ""}
                  //     </span>
                  //   </th>
                  //   GLOBAL FILTER HEADER
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "🔼"
                        : ""}
                    </span>
                  </th>
                ))}
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
    </div>
  );
};

export default BasicTable;
