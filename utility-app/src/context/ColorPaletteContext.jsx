import { createContext, useState } from "react";
const ColorPaletteContext = createContext();

export const ColorPaletteProvider = ({ children }) => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const colorListFunc = (colorCodeQuantity) => {
    let randomColorList = [];
    for (let index = 0; index < colorCodeQuantity; index++) {
      randomColorList.push(getRandomColor());
    }
    return randomColorList;
  };

  return (
    <ColorPaletteContext.Provider value={{ colorListFunc }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export default ColorPaletteContext;
