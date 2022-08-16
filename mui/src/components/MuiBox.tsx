import { Box } from "@mui/material";

const MuiBox = () => {
  // replacement to div tag
  //   has sx prop
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: " 100px",
          width: " 100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        component="span"
      >
        Box Element
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </>
  );
};

export default MuiBox;
