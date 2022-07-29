import React from "react";
import Card from "../components/Card";
import { PATHS } from "../routes/paths";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center gap-10">
      <h1 className="text-4xl text-center md:text-8xl font-bold text-primary">
        REACT UTILITY
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-16 ">
        <Card
          title="Create Todo List"
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor explicabo ipsam velit earum in ipsa incidunt nemo quia molestias repudiandae."
          }
          link={PATHS.todo}
        />
        <Card
          title="Create Notes"
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor explicabo ipsam velit earum in ipsa incidunt nemo quia molestias repudiandae."
          }
          link={PATHS.notes}
        />
        <Card
          title="Create Color Palette"
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor explicabo ipsam velit earum in ipsa incidunt nemo quia molestias repudiandae."
          }
          link={PATHS.colorPalette}
        />
      </div>
    </div>
  );
};
export default HomePage;
