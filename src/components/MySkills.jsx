import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCard } from "./SkillCard";
import { forwardRef } from "react";

export const MySkills = forwardRef((_, ref) => {
  return (
    <div className="bg-[#F4E2C9] py-heroLg 2xl:py-heroXl" ref={ref}>
      <div className=" flex items-center justify-center gap-4">
        <h3 className="font-black text-center text-[#101118] text-3xl lg:text-5xl xl:text-6xl">
          Competenze
        </h3>
        <FontAwesomeIcon
          icon="fa-solid fa-code"
          className="text-3xl lg:text-5xl xl:text-6xl"
          style={{ color: "#101118" }}
        />
      </div>
      <div className="sm:m-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex px-5 gap-6 sm:justify-center sm:flex-wrap overflow-x-auto hideScrollbar scroll pt-24 sm:gap-3 lg:gap-6">
          <SkillCard iconName={"HTML"} icon={"fa-brands fa-html5"} />
          <SkillCard iconName={"CSS"} icon={"fa-brands fa-css3"} />
          <SkillCard iconName={"SASS"} icon={"fa-brands fa-sass"} />
          <SkillCard iconName={"JAVASCRIPT"} icon={"fa-brands fa-js"} />
          <div className="min-w-60 flex justify-center items-center overflow-hidden flex-col relative z-20 sm:py-20 bg-emerald-400 p-3 sm:p-6 rounded-2xl hover:cardBorder sm:basis-[calc(50%-6px)] lg:basis-[calc(33.333333%-16px)] 2xl:basis-[calc(25%-18px)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="166.68"
              height="166.68"
              fill="rgb(16, 17, 24)"
              viewBox="0 0 50 50"
              className="w-24 sm:w-60"
            >
              <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
            </svg>
            <p className="font-bold text-xl py-6">Typescript</p>
          </div>
          <SkillCard iconName={"REACT.JS"} icon={"fa-brands fa-react"} />
          <SkillCard iconName={"NODE.JS"} icon={"fa-brands fa-node"} />
          <SkillCard iconName={"GIT"} icon={"fa-brands fa-github"} />
        </div>
      </div>
    </div>
  );
});
