import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material/";
import React, { useState } from "react";
const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);

  const handleFormatChange = (
    _e: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormat(updatedFormats);
    console.log(format);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* can use href with text variant */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        {/* colors  */}
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          //   before text
          startIcon={<SendIcon />}
          //   after text
          //   endIcon={<SendIcon />}
        >
          Send
        </Button>
        <Button
          variant="contained"
          //   before text
          //   startIcon={<SendIcon />}
          //   after text
          endIcon={<SendIcon />}
          //   disable shadow
          disableElevation
          //   disable ripple effect
          disableRipple
        >
          Send (no cosmetics)
        </Button>

        <IconButton
          onClick={() => alert("Send")}
          color="success"
          aria-label="icon-send"
        >
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="contained" color="error">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="button-group" variant="outlined" color="error">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle buttons, uses state  */}
      <Stack direction="row" spacing={2}>
        <ToggleButtonGroup
          // user can select only one button at a time
          exclusive
          size="small" //medium or large
          color="success" // or any other color
          orientation="horizontal" // or vertical
          onChange={handleFormatChange}
          value={format}
          aria-label="text formatting"
        >
          <ToggleButton aria-label="bold" value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton aria-label="italic" value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton aria-label="underline" value="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
