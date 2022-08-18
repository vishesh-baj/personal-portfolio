import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ColorPaletteContext from "../context/ColorPaletteContext";
const ColorPallettePage = () => {
  const { colorListFunc } = useContext(ColorPaletteContext);
  const [colorsList, setColorsList] = useState([]);

  useEffect(() => {
    setColorsList(colorListFunc(4));
  }, []);
  return (
    <Navbar>
      <div className="w-screen h-screen flex flex-col items-center justify-center py-4 gap-5">
        <h1 className="text-3xl uppercase font-bold text-secondary">
          Color Palette
        </h1>

        <button
          className="btn btn-primary"
          onClick={() => setColorsList(colorListFunc(4))}
        >
          Reroll
        </button>

        <div className="w-[80vw] h-[70vh] bg-base-200 flex flex-col md:flex-row  rounded-2xl">
          {colorsList.map((color) => (
            <div
              key={color}
              style={{ background: color }}
              className="h-1/4 md:h-full w-full flex justify-center items-center hover:opacity-80 cursor-pointer"
            >
              <h1 className="text-white text-lg font-bold z-10">
                {color.substring(1)}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export default ColorPallettePage;
