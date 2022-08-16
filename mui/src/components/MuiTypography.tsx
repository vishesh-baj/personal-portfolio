import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      {/* changers html semantic tag */}
      <Typography component="h1" variant="h4">
        H4 Heading
      </Typography>
      {/* gutterbottom adds bottom margin */}
      <Typography gutterBottom variant="h5">
        H5 Heading
      </Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      {/* default typography variant */}
      <Typography variant="body1">
        {/* has paragraph tag */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, modi.
      </Typography>
      <Typography variant="body2">
        {/* has paragraph tag */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
        enim.
      </Typography>
    </div>
  );
};

export default MuiTypography;
