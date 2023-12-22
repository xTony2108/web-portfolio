import gympro from "../assets/images/gympro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <div className="relative pt-24">
        <div className="absolute w-full h-full top-0 left-0 flex">
          <button className="absolute self-center -left-20 prev">
            <FontAwesomeIcon
              icon="fa-solid fa-caret-left"
              size="6x"
              style={{ color: "black" }}
            />
          </button>
          <button className="absolute self-center -right-20 next">
            <FontAwesomeIcon
              icon="fa-solid fa-caret-right"
              size="6x"
              style={{ color: "black" }}
            />
          </button>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ el: ".pagination", clickable: true }}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        >
          <SwiperSlide>
            <a
              href="https://github.com/xTony2108/Gympro-Project"
              target="_blank"
            >
              <img src={gympro} alt="Gympro" />
            </a>
          </SwiperSlide>
          <div className="pagination flex justify-center py-6 gap-2"></div>
        </Swiper>
      </div>
    </>
  );
};
