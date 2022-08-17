import { Button, Container, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
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
        <Banner />
        <Promotions />
        <Box>
          <Typography variant="h4" textAlign={"center"} py={4}>
            Our Products
          </Typography>
        </Box>
        <Products />
        {/*
      
    
      Footer
      Searchbox
      appDrawer
    */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
