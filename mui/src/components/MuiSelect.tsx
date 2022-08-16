import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleMultiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
    console.log(countries);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(country);
    setCountry(event.target.value as string);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box width="250px">
        <TextField
          label="Select Country single select"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="CAN">Canada</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select Countries multi select"
          select
          value={countries}
          onChange={handleMultiChange}
          SelectProps={{
            multiple: true,
          }}
          fullWidth
          size="small"
          color="secondary"
          helperText="Please select your country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="CAN">Canada</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
