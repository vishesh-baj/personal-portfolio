import { Box, Button, IconButton, styled } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animations";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url-(${src})`,
  width: "100%",
  background: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

// product action button, getting inhereting from product Action button
export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

export const ProductAddToCard = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "24px",
    width: "300px",
    padding: "10px 5px",
    animation:
      show && `${slideInBottom} 0.5 cubic-bezier(0.25,0.46,0.45,0.94) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: 4,
  flexDirection: "column",
  alignItems: "center",
}));
export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show && `${slideInRight} 0.5 cubic-bezier(0.25,0.46,0.45,0.94) both`,
  },
}));
