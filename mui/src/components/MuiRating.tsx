import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Stack, Rating } from "@mui/material";
import { useState } from "react";
const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(3);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
    console.log(rating);
  };

  return (
    <Stack direction={"row"} spacing={2}>
      <Rating
        precision={0.5}
        value={rating}
        onChange={handleChange}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" color="error" />}
        // cannot change the rating
        // readOnly
        // selected rating icon only highlighted
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
