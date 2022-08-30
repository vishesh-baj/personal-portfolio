import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-8xl uppercase font-extrabold"
          >
            Home Page
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="btn btn-lg btn-accent"
          >
            GET STRARTED
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
