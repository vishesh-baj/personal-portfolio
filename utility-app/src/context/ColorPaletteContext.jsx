import { createContext } from "react";
const ColorPaletteContext = createContext();

export const ColorPaletteProvider = ({ children }) => {
  // generate random hexcode color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
//   iterates the amount in an array of all randomly generated colors 
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
