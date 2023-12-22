import { Carousel } from "./Swiper";

export const MyProjects = () => {
  return (
    <>
      <div className="py-sectionPY">
        <div className="max-w-sectionWidth m-auto">
          <h4 className="font-black text-6xl text-center text-[#101118]">
            Progetti
          </h4>
          <Carousel />
        </div>
      </div>
    </>
  );
};
