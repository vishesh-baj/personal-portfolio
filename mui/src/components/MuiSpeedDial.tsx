import { FileCopyOutlined, Print, Share, Edit } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation speed dial"
      sx={{ position: "absolute", bottom: "16px", right: "16px" }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction
        tooltipOpen
        icon={<FileCopyOutlined />}
        tooltipTitle="Copy"
      />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
