import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  ActionsIconContainerDesktop,
  ActionsIconContainerMobile,
  MyList,
} from "../../styles/appBar";
import { Colors } from "../../styles/theme";

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionsIconContainerMobile
    : ActionsIconContainerDesktop;

  return (
    <>
      <Component>
        <MyList type="row">
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <ShoppingCart />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <Person />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <Favorite />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
      </Component>
    </>
  );
};
export default Actions;
