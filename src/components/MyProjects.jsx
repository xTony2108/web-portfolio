import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "./Swiper";

export const MyProjects = ({ myProjectsRef }) => {
  return (
    <>
      <div className="py-heroLg 2xl:py-heroXl px-5" ref={myProjectsRef}>
        <div className="m-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="flex justify-around items-center">
            <button className="prev disabled:opacity-30">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-left"
                size="5x"
                style={{ color: "black" }}
              />
            </button>
            <h4 className="font-black text-center text-[#101118] text-3xl lg:text-5xl xl:text-6xl">
              Progetti
            </h4>
            <button className="next disabled:opacity-30">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                size="5x"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
};
