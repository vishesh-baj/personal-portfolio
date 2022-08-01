import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="container mx-auto py-5 ">
        <nav className="my-5 px-4 w-full h-16 flex justify-between items-center rounded-full hover:shadow-lg hover:shadow-teal-400 bg-teal-600 duration-150 cursor-pointer transition ease-in">
          <div className="w-10 h-10 rounded-full bg-gray-700  shadow-md shadow-teal-400 flex items-center justify-center">
            L
          </div>
          <ul className="flex gap-5 mr-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Specific controlled components  */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className="relative w-full bg-[url('https://images.pexels.com/photos/268832/pexels-photo-268832.jpeg?cs=srgb&dl=pexels-pixabay-268832.jpg&fm=jpg')] bg-cover  bg-no-repeat rounded-md h-96 bg-teal-400 shadow-xl shadow-teal-400 mt-10"
        >
          {/* Responsivr div directally proportional to the filesize provided by the browser and its counter parts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute flex flex-col justify-center items-center rounded-md z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"
          >
            <h1 className="z-20 text-4xl text-white">BACKDROP</h1>
            <button className="btn btn-ghost btn-xl">Know More</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;
