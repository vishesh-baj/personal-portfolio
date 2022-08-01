import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  const landingPageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },

    final: {
      opacity: 1,
      scale: 1.1,
    },
  };

  return (
    <div className="w-screen h-[92vh] bg-primary flex flex-col gap-10 justify-center items-center">
      <motion.h1
        variants={landingPageVariants}
        initial="initial"
        animate="final"
        transition={{ duration: 1 }}
        className="text-6xl text-center"
      >
        REACT DYNAMIC JSON SERVER
      </motion.h1>
      <div className="flex gap-5">
        <Link to="/login">
          <motion.button
            variants={landingPageVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="btn btn-secondary"
          >
            Get Started
          </motion.button>
        </Link>
        <Link target="_blank" to="https://github.com/vishesh-baj">
          <motion.button
            variants={landingPageVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="btn btn-secondary"
          >
            Know More
          </motion.button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
