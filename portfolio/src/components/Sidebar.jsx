import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import CoverImage from "../assets/cover-img.png";
import AvatarImage from "../assets/avatar.png";
const Sidebar = ({ toggleNavigation, setNavToggle }) => {
  return (
    <>
      <div className=" w-1/4 h-screen bg-black flex flex-col gap-5 justify-start items-center p-5">
        <div className=" flex flex-col gap-3 ">
          <img src={CoverImage} className="w-full h-full" alt="" />
          <h1 className="uppercase text-3xl font-bold text-white">
            Vishesh Bajpayee
          </h1>
          <h2 className="font-bold text-white">
            Frontend Magician | Creative Consultant
          </h2>
          <div className="flex gap-5">
            <AiFillLinkedin
              size={30}
              className="cursor-pointer text-teal-400"
            />
            <AiFillGithub size={30} className="cursor-pointer text-teal-400" />
            <AiFillInstagram
              size={30}
              className="cursor-pointer text-teal-400"
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
