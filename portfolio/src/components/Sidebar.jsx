import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
const Sidebar = ({ toggleNavigation, setNavToggle }) => {
  return (
    <>
      <div className="w-1/4 h-screen bg-gray-900 flex flex-col gap-5 justify-start items-center p-5">
        <div className="mt-10 flex flex-col gap-5 items-center">
          <div className="w-52 h-52 rounded-full bg-black"></div>
          <h1 className="uppercase text-3xl font-bold">Vishesh Bajpayee</h1>
          <h2 className="font-bold">Frontend Magician | Creative Consultant</h2>
          <div className="flex gap-5 justify-center">
            <AiFillLinkedin
              size={30}
              color="white"
              className="cursor-pointer"
            />
            <AiFillGithub size={30} color="white" className="cursor-pointer" />
            <AiFillInstagram
              size={30}
              color="white"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => toggleNavigation && setNavToggle(!toggleNavigation)}
        className={`w-1/4 h-screen  ${
          toggleNavigation && "bg-opacity-60 bg-black"
        } flex flex-col gap-5 justify-start items-center p-5 absolute top-0 bottom-0 left-0 right-0 transition duration-[.8s] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`}
      ></div>
    </>
  );
};

export default Sidebar;
