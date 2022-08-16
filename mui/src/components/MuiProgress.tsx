import { Box, Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="error" />
      <CircularProgress color="success" variant="determinate" value={60} />

      <Stack>
        <Box>
          <LinearProgress color="error" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default MuiProgress;
