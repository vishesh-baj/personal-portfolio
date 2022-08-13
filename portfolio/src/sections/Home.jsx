import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navbar from "../components/Navbar";
import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiSass,
  DiReact,
  DiGithubBadge,
  DiNpm,
  DiHeroku,
  DiBootstrap,
} from "react-icons/di";
import {
  SiSvelte,
  SiGnubash,
  SiNetlify,
  SiTailwindcss,
  SiMaterialui,
  SiFramer,
  SiGreensock,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GiDaisy } from "react-icons/gi";
import { MdHttp } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";
const Home = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div
      className="w-screen h-screen relative flex bg-black"
      data-scroll-section
    >
      <Sidebar toggleNavigation={navToggle} setNavToggle={setNavToggle} />
      {/* home section */}
      <aside className="w-3/4  h-screen bg-gray-800">
        {!navToggle && (
          <GiHamburgerMenu
            size={20}
            color="white"
            className="absolute right-5 top-5 z-30 cursor-pointer"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}
        {navToggle && (
          <IoClose
            size={20}
            color="white"
            className="absolute right-5 top-5  cursor-pointer z-30"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}
        <div className="flex  flex-wrap w-full h-screen  ">
          <div className="w-1/2 h-1/2 bg-black p-10 flex flex-col  justify-center">
            <h1 className="text-white text-5xl font-bold uppercase   ">
              Profile
            </h1>
            <p className="text-white text-sm font-semibold">
              <br />
              Highly motivated to work on developing skills and grow
              professionally. I am confident in my ability to ideate innovative
              solutions to problems in software space. Keen interest in
              technical integration and deployment of ideas in practical world.
            </p>
          </div>
          <div className="w-1/2 h-1/2 bg-gradient-to-r from-teal-400 relative cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 transition duration-[3s] ease-in">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
              <BiCoffeeTogo className="text-5xl text-white" />
              <h1 className="text-white z-10 font-bold text-3xl">
                BUY ME A COFFEE
              </h1>
            </div>
          </div>
          <div className="w-full h-1/2 bg-black p-10 flex flex-col gap-5">
            <h1 className="text-white text-5xl font-bold uppercase   ">
              Professional Skills
            </h1>
            <h1 className="text-white text-lg font-semibold  pl-2">
              Development
            </h1>

            <div className="flex gap-5">
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiHtml5 className="text-orange-500" size={40} /> HTML5
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiCss3 className="text-blue-400" size={40} /> CSS3
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiJavascript className="text-yellow-400" size={40} />{" "}
                Javascript
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiSass className="text-pink-400" size={40} /> Sass
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiReact className="text-cyan-300" size={40} /> React
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiSvelte className="text-orange-500" size={40} /> Svelte
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <TbApi className="text-green-400" size={40} /> Rest API
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiGithubBadge size={40} /> Github
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiGnubash size={40} /> Git
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiNpm className="text-red-400" size={40} /> npm
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiHeroku className="text-purple-400" size={40} /> Heroku
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiNetlify size={40} /> Netlify
              </h2>
            </div>
            <h1 className="text-white text-lg font-semibold  pl-2 mt-2">
              Libraries
            </h1>

            <div className="flex gap-5">
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiTailwindcss className="text-teal-400" size={40} /> Tailwind
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <DiBootstrap className="text-purple-500" size={40} /> Bootstrap
              </h2>

              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <GiDaisy className="text-rose-500" size={40} /> DaisyUI
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiMaterialui className="text-blue-400" size={40} /> MaterialUI
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiFramer className="text-pink-600" size={40} /> Framer Motion
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiGreensock className="text-lime-400" size={40} /> Gsap
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiStyledcomponents className="text-yellow-600" size={40} />{" "}
                Styled Components
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <SiRedux className="text-purple-400" size={40} /> Redux
              </h2>
              <h2 className="flex flex-col items-center gap-2 text-white font-semibold">
                <MdHttp className="text-red-400" size={40} /> Axios
              </h2>
            </div>
          </div>
        </div>
      </aside>
      <Navbar toggleNavigation={navToggle} setNavToggle={setNavToggle} />
    </div>
  );
};

export default Home;
