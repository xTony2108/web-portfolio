import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCard } from "./SkillCard";

export const MySkills = () => {
  return (
    <div className="bg-[#F4E2C9] py-sectionPY">
      <div className=" flex items-center justify-center gap-4">
        <h3 className="font-black text-6xl text-center text-[#101118]">
          Competenze
        </h3>
        <FontAwesomeIcon
          icon="fa-solid fa-code"
          size="4x"
          style={{ color: "#101118" }}
        />
      </div>
      <div className="max-w-sectionWidth m-auto">
        <div className="flex justify-center flex-wrap pt-24 gap-6">
          <SkillCard
            iconName={"HTML"}
            icon={"fa-brands fa-html5"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-solid fa-star", color: true }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <SkillCard
            iconName={"CSS"}
            icon={"fa-brands fa-css3"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-solid fa-star", color: true }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <SkillCard
            iconName={"SASS"}
            icon={"fa-brands fa-sass"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-solid fa-star", color: true }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <SkillCard
            iconName={"JAVASCRIPT"}
            icon={"fa-brands fa-js"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-regular fa-star", color: false }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <div className="flex justify-center items-center overflow-hidden flex-col relative z-20 bg-emerald-400 p-6 rounded-2xl hover:cardBorder basis-[calc(33.333333%-24px)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="166.68"
              height="166.68"
              fill="rgb(16, 17, 24)"
              viewBox="0 0 50 50"
            >
              <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
            </svg>
            <p className="font-bold text-xl py-6">Typescript</p>
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                style={{ color: "gold" }}
              />
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                style={{ color: "gold" }}
              />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
          </div>
          <SkillCard
            iconName={"REACT.JS"}
            icon={"fa-brands fa-react"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-regular fa-star", color: false }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <SkillCard
            iconName={"NODE.JS"}
            icon={"fa-brands fa-node"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-regular fa-star", color: false }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
          <SkillCard
            iconName={"GIT"}
            icon={"fa-brands fa-github"}
            firstStar={{ star: "fa-solid fa-star", color: true }}
            secondStar={{ star: "fa-solid fa-star", color: true }}
            thirdStar={{ star: "fa-solid fa-star", color: true }}
            fourthStar={{ star: "fa-solid fa-star", color: true }}
            fifthStar={{ star: "fa-regular fa-star", color: false }}
          />
        </div>
      </div>
    </div>
  );
};
