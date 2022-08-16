import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  // replacement to div tag
  //   has sx prop
  return (
    <Paper elevation={4} sx={{ padding: "32px" }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{ border: "1px solid" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
      </Stack>

      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
