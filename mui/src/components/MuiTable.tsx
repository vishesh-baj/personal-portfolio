import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Rani",
    last_name: "Donat",
    email: "rdonat0@printfriendly.com",
    gender: "Female",
    ip_address: "63.225.247.99",
  },
  {
    id: 2,
    first_name: "Verney",
    last_name: "Dilliston",
    email: "vdilliston1@theglobeandmail.com",
    gender: "Genderfluid",
    ip_address: "124.84.25.100",
  },
  {
    id: 3,
    first_name: "Gordie",
    last_name: "Jenkins",
    email: "gjenkins2@surveymonkey.com",
    gender: "Male",
    ip_address: "67.71.195.235",
  },
  {
    id: 4,
    first_name: "Ashlin",
    last_name: "Gurnett",
    email: "agurnett3@hostgator.com",
    gender: "Male",
    ip_address: "14.237.102.81",
  },
  {
    id: 5,
    first_name: "Haley",
    last_name: "Dulton",
    email: "hdulton4@cornell.edu",
    gender: "Male",
    ip_address: "186.147.87.172",
  },
  {
    id: 6,
    first_name: "Sampson",
    last_name: "McHale",
    email: "smchale5@tamu.edu",
    gender: "Male",
    ip_address: "103.80.134.142",
  },
  {
    id: 7,
    first_name: "Sibel",
    last_name: "Chippindall",
    email: "schippindall6@deviantart.com",
    gender: "Female",
    ip_address: "165.86.211.190",
  },
  {
    id: 8,
    first_name: "Blondelle",
    last_name: "Nannoni",
    email: "bnannoni7@ameblo.jp",
    gender: "Female",
    ip_address: "50.204.50.100",
  },
  {
    id: 9,
    first_name: "Haily",
    last_name: "Willacot",
    email: "hwillacot8@paypal.com",
    gender: "Male",
    ip_address: "143.184.180.18",
  },
  {
    id: 10,
    first_name: "Dmitri",
    last_name: "Tebbet",
    email: "dtebbet9@statcounter.com",
    gender: "Male",
    ip_address: "207.204.26.164",
  },
];

const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="table" sx={{ maxHeight: "300px" }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={row.id}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
