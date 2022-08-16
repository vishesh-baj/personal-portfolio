import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextfields = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [value, setValue] = useState("");
  const handleVisiblity = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row" mt={5}>
        {/* varient outline = default varient */}
        <TextField label="outlined" variant="outlined" />
        <TextField label="filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row" mt={5}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          required
          label="Password"
          helperText="Do not share your password with anyone"
          type="password"
        />
        <TextField
          required
          label="Password"
          helperText="Text field disabled"
          type={!isVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleVisiblity}>
                  {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          label="Read only"
          helperText="Text field read only"
          disabled
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        {/* prefix */}
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleVisiblity}>
                  {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* suffix */}
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Form Input"
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextfields;
