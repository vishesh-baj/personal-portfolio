import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <LoginPage />
      </Box>
    </Container>
  );
}
