import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel-01"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel-01")}
      >
        <AccordionSummary
          id="panel-01"
          aria-controls="panel-1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            commodi optio cumque. Praesentium quasi ab, nemo et maxime porro
            asperiores, velit at suscipit enim facere, illo sunt facilis vitae
            recusandae.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-02"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel-02")}
      >
        <AccordionSummary
          id="panel-02"
          aria-controls="panel-2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            commodi optio cumque. Praesentium quasi ab, nemo et maxime porro
            asperiores, velit at suscipit enim facere, illo sunt facilis vitae
            recusandae.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-03"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel-03")}
      >
        <AccordionSummary
          id="panel-03"
          aria-controls="panel-3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            commodi optio cumque. Praesentium quasi ab, nemo et maxime porro
            asperiores, velit at suscipit enim facere, illo sunt facilis vitae
            recusandae.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MuiAccordian;
