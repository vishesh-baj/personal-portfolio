import React, { useMemo } from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, usePagination } from "react-table";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const TableInstance = useTable(
    {
      columns,
      data,
      // initialState contains all the default values for the table, pageIndex is number of nultiple in which the page is skipped in pagination, pageINdex starts with 0
      initialState: { pageIndex: 4 },
    },
    // usePagination hook is used to create the pagination in react-table
    usePagination
  );
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    // rows,
    // instead of roews we use page
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,

    state,
    // footerGroups,
  } = TableInstance;

  //   page index to show which page we are at present
  const { pageIndex, pageSize } = state;

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
          {page.map((row) => {
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

        {/* <tfoot>
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
        </tfoot> */}
      </table>

      {/* INPUTS FOR INTRACTING WITH TABLE */}
      <div className="flex gap-10 mt-5 py-5 justify-end px-5">
        <span className="text-xl text-secondary mt-4">
          Page {pageIndex + 1} of {pageOptions.length}{" "}
        </span>
        <span className="text-xl text-secondary mt-1 flex gap-5 items-center">
          {" "}
          <span>| Go To Page</span>
          <input
            className=" w-20 input input-primary"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            type="number"
            name="goto"
            id="goto"
          />
        </span>

        {/* to set the page size */}
        <select
          className="select w-full max-w-xs"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option key={10} value={10}>
            Show {10}
          </option>
          <option key={25} value={25}>
            Show {25}
          </option>
          <option key={50} value={50}>
            Show {50}
          </option>
          ;
        </select>

        <button
          className="btn btn-circle btn-primary text-center"
          disabled={!canPreviousPage}
          onClick={() => gotoPage(0)}
        >
          {"<<"}
        </button>
        <button
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <button
          disabled={!canNextPage}
          onClick={() => nextPage()}
          className="btn btn-secondary"
        >
          Next
        </button>
        <button
          className="btn btn-circle btn-primary text-center"
          disabled={!canNextPage}
          onClick={() => gotoPage(pageCount - 1)}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default BasicTable;
