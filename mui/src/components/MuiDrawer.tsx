import { Menu } from "@mui/icons-material";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography component="div" variant="h6">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
    </>
  );
};

export default MuiDrawer;
