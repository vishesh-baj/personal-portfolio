import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link variant="body2" href="#">
        Link
      </Link>
      <Typography variant="h6">
        <Link underline="hover" href="#" color="secondary">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
