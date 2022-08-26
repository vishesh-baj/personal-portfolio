import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import ThemeButton from "../components/ThemeButton";

const Dashboard = () => {
  const handleThemeChange = (themeAttribute) => {
    document.body.setAttribute("data-theme", themeAttribute);
    console.log(document.body);
  };
  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row gap-5 w-screen h-full p-5 ">
        <div className="w-full md:w-1/2 h-full bg-base-300 rounded-2xl p-5">
          <h1 className="text-3xl md:text-4xl pl-8">Dashboard Overview</h1>
          <br />
          <div className="w-full  flex flex-col justify-center  p-10 bg-base-200 rounded-2xl">
            <h1 className="text-3xl">Data overview </h1>
            <br />
            <div className="flex flex-col gap-4">
              <h2>Total Students: 22132</h2>
              <h2>Total Faculties: 1232</h2>
              <h2>Total Stocks: 212</h2>
              <hr />
              <h2>Total Entries: 19934</h2>
            </div>
          </div>
          <div className="w-full  flex flex-col justify-center mt-5  p-4 bg-base-200 rounded-2xl">
            <h1 className="text-3xl">Change Theme </h1>
            <br />
            <div className="flex flex-wrap gap-2  ">
              <ThemeButton
                onClick={() => handleThemeChange("wireframe")}
                tooltip="wireframe"
                background="bg-gray-300"
              />
              <ThemeButton
                onClick={() => handleThemeChange("dark")}
                tooltip="dark"
                background="bg-[#242933]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("synthwave")}
                tooltip="synthwave"
                background="bg-[#2D1B69]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("retro")}
                tooltip="retro"
                background="bg-[#E4D8B4]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("cyberpunk")}
                tooltip="cyberpunk"
                background="bg-[#FBEE04]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("aqua")}
                tooltip="aqua"
                background="bg-[#345CA8]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("luxury")}
                tooltip="luxury"
                background="bg-[#0A0A0B]"
              />
              <ThemeButton
                onClick={() => handleThemeChange("dracula")}
                tooltip="dracula"
                background="bg-[#rgb(39,41,53)]"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full  flex flex-col gap-5">
          <div className="w-full h-1/2 bg-base-300 rounded-2xl"></div>
          <div className="w-full h-1/2 bg-base-300 rounded-2xl"></div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
