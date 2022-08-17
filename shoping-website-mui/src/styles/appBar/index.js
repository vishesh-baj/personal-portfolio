import { Typography, Box, List } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
import { styled } from "@mui/material/styles";

// container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "50px",
  color: Colors.secondary,
  fontFamily: "Montez",
}));

// list
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionsIconContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionsIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid${Colors.border}`,
}));
