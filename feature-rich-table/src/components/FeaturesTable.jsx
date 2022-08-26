import React from "react";
import { useTable } from "react-table";

const FeaturesTable = () => {
  // columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );
  // data
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  //   create table instance

  const tableInstance = useTable({ columns, data });

  //   get methods from table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // When true, the hiddenColumns state will automatically reset if any of the following conditions are met:
    // columns is changed
    // To disable, set to false
    setHiddenColumns,
    //     Defaults to {}
    // The default column object for every column passed to React Table.
    // Column-specific properties will override the properties in this object, eg. { ...defaultColumn, ...userColumn }
    // This is particularly useful for adding global column properties. For instance, when using the useFilters plugin hook, add a default Filter renderer for every column, eg.{ Filter: MyDefaultFilterComponent }
    defaultColumn,
    // Use this function to change how React Table detects unique rows and also how it constructs each row's underlying id property.
    // Optional
    // Must be memoized
    // Defaults to (row, relativeIndex, parent) => parent ? [parent.id, relativeIndex].join('.') : relativeIndex

    getRowId,
    initialState,
  } = tableInstance;

  return (
    <div className="overflow-x-auto">
      {/* there i sa certain degree of experience of ther followinf and there are so many tings in this world on which we dont have any control */}
      <table className="table w-full table-zebra" {...getTableProps()}>
        {/* table head */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <th {...col.getHeaderProps()}>{col.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        {/* table body */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            // ? specific controllable component
            return (
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>

              // *  table body props specific to the seperation back to unity , 2022 they would consider to be garbage level, out of the cycle of death and birth, estungish the light of life, andfade out of existance and is associated with suffering. You are entangled by your association of this world corrosponding experinece union with god has a problem ecause thats where creation cam from first place.

              //   ?            The following additional properties are available on every headerGroup object returned by the table instance.

              // !headers: Array<Column>
              // Required
              // The columns in this header group.
              // getHeaderGroupProps: Function(?props)
              // Required
              // This function is used to resolve any props needed for this header group's row.
              //   two complimentary realities, people need god butt god also need people. so there is a symbiosis, to be in the woeld and this is the solution found in the mahayana
              // You can use the getHeaderGroupProps hook to extend its functionality.
              // Custom props may be passed. NOTE: Custom props will override built-in table props, so be careful!
              // getFooterGroupProps: Function(?props)
              // Required
              // This function is used to resolve any props needed for this header group's footer row.
              // You can use the getFooterGroupProps hook to extend its functionality.
              // Custom props may be passed. NOTE: Custom props will override built-in table props, so be careful!
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTable;
