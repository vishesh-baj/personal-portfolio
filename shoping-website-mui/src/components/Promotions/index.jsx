import { Box, Slide } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  PromotionsContainer,
  PromotionsMessage,
} from "../../styles/promotions";

// messages to be displayed in the promotions section
const messages = [
  "20% off on all products",
  "Winter sale starts now, visit anyt store",
  "Get free coupons wirth 500 on purchase over 1000Rs",
];
const Promotions = () => {
  const containerRef = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervelId = setInterval(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 4000);

    return () => {
      clearInterval(intervelId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems="center">
          <PromotionsMessage>{messages[messageIndex]}</PromotionsMessage>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
};
export default Promotions;
