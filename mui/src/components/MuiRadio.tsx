import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          //   aligns buttons in row
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="0-2 Years"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="medium" />}
            label="3-5 Years"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="5-7 Years"
            value="5-7"
          />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
