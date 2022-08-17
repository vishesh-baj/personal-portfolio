import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <BannerContainer>
        <BannerImage src="/images/banner/banner.png" />
        <BannerContent>
          <Typography variant="h6">Huge Collection</Typography>
          <BannerTitle variant="h2">New Bags</BannerTitle>
          <BannerDescription variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            rem, animi consequuntur,
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </div>
  );
};

export default Banner;
