import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="div"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, odio at obcaecati eaque fugiat amet maxime error
            provident tempora ratione quisquam neque harum itaque et soluta iure
            vel hic accusamus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
