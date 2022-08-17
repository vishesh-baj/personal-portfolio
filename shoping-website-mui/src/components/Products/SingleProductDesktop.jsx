import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
} from "../../styles/product";
import ProductMeta from "./ProductMeta";

const SingleProductDesktop = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <Favorite />
        </ProductFavButton>

        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    </>
  );
};

export default SingleProductDesktop;
