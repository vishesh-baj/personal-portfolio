import { motion } from "framer-motion";
import React from "react";
import Card from "../components/shared/Card";
const HomePage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-secondary">
      <div className="flex flex-col gap-5 justify-center items-center py-10 mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl font-accent font-bold"
        >
          Utility App for Development
        </motion.h1>
        <div className=" flex gap-5  justify-center mt-10">
          <Card
            cardLink={"/todo"}
            cardTitle={"TODO"}
            cardBody={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea blanditiis fugiat cumque non."
            }
          />
          <Card
            cardLink={"/notes"}
            cardTitle={"NOTES"}
            cardBody={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea blanditiis fugiat cumque non."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
