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

const Home = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div
      id="section-1"
      className="w-screen h-screen relative flex bg-black"
      data-scroll-section
    >
      <Sidebar toggleNavigation={navToggle} setNavToggle={setNavToggle} />
      {/* home section */}
      <aside className="w-3/4  h-screen bg-gray-800">
        {!navToggle && (
          <GiHamburgerMenu
            size={20}
            className="absolute right-5 top-5 z-30 cursor-pointer text-teal-400"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}
        {navToggle && (
          <IoClose
            size={20}
            className="absolute right-5 top-5  cursor-pointer text-teal-400 z-30"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}

        <div
          className="absolute rotate-[90deg] top-48 -right-[75px] z-20 cursor-pointer 
        "
        >
          <h1 className="text-teal-400 z-10 font-bold text-2xl">
            BUY ME A COFFEE
          </h1>
        </div>

        <div className="flex  flex-wrap w-full h-screen">
          <div className="h-1/2 ">
            <div className="w-[70vw] h-1/2 bg-black p-10 flex flex-col  justify-center">
              <div>
                <h1 className="text-teal-400 text-5xl font-bold uppercase   ">
                  Profile
                </h1>
                <p className="text-white text-sm font-semibold">
                  <br />
                  Highly motivated to work on developing skills and grow
                  professionally. I am confident in my ability to ideate
                  innovative solutions to problems in software space. Keen
                  interest in technical integration and deployment of ideas in
                  practical world.
                </p>
              </div>
            </div>
            <div className="w-[70vw] h-1/2 bg-black p-10 flex flex-col  justify-center">
              <div>
                <h1 className="text-teal-400 text-5xl font-bold uppercase   ">
                  Personal Skills
                </h1>
                <ul className="list-disc flex flex-col gap-2 pt-5 pl-10 ">
                  <li className="text-white">
                    <h1>PART-TIME - GRAPHIC DESIGNER</h1>
                  </li>
                  <li className="text-white">
                    <h1>FREELANCE - CONTENT WRITER </h1>
                  </li>
                  <li className="text-white">
                    <h1>PART-TIME - ANCHOR</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-1/2 bg-black p-10 flex flex-col gap-5">
            <h1 className="text-teal-400 text-5xl font-bold uppercase   ">
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
