import { Carousel } from "./Swiper";

export const MyProjects = () => {
  return (
    <>
      <div className="py-heroLg 2xl:py-heroXl px-4 sm:px-0">
        <div className="m-auto max-w-sm sm:max-w-xl lg:max-w-4xl xl:max-w-6xl">
          <h4 className="font-black text-center text-[#101118] text-3xl lg:text-5xl xl:text-6xl">
            Progetti
          </h4>
          <Carousel />
        </div>
      </div>
    </>
  );
};
