import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appBar";
import Actions from "./Actions";

const AppbarDesktop = ({ matches }) => {
  return (
    <>
      {/* parent wrapper */}
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact" />
          <ListItemButton>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};
export default AppbarDesktop;
