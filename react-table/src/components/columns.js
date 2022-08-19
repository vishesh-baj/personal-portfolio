import { format } from "date-fns";
import ColumnFilter from "./ColumnFIlter";
export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    // to disable the filters from a column
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "info",
    Footer: "info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
    ],
  },
];
