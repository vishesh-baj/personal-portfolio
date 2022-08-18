import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCard,
  ProductFavButton,
  ProductImage,
} from "../../styles/product";
import ProductMeta from "./ProductMeta";

const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);

    // teal static corrospondance not connect to reduz yet
  };
  // there are so many things in this world on which we dont have any control like earthquakes tsunamies reality shows and what not but he point is on what we an like to forgive someone or to spread hapiness without expecting any in return

  // walking or talking but you also notice when u are not breathing you r breathing goes on as well, hence breth is voluntary and invluntary XRION AND THata is whay breathing is the most important part of the meditation

  // spcifics provided so far are basis on which everything depends
  // japanease indigo for corrosponding the send warm black out

  // mountain medow - #30ba8f
  // Eton blue - #96c8a2
  // Light sea Green - #20b2aa
  // Aero Blue - #c9ffe5
  // Magic Mint - #aaf0d1
  // Aquamarine - #7fffd4

  // synthetic aquamarine
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <Favorite />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCard show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCard>
        )}

        <ProductActionsWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
};

export default SingleProductDesktop;
