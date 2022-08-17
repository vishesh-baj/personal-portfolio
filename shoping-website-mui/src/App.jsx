import { Button, Container, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import AppBar from "./components/AppBar";
import theme from "./styles/theme";
const App = () => {
  // first page render
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <AppBar />
        {/*
      
      Banner 
      Promotions 
      Title
      Products 
      Footer
      Searchbox
      appDrawer
    */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
