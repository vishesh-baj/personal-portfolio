import { FormControlLabel, Switch, Box } from "@mui/material";
import React, { useState } from "react";
const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((PrevChecked) => !PrevChecked);
    console.log(checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
export default MuiSwitch;
