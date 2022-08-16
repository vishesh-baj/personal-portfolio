import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
const MuiBreadcrumb = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
        maxItems={3}
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Cataglog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumb;
