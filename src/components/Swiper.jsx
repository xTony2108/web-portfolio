import gympro from "../assets/images/gympro.png";
import gamergearhub from "../assets/images/gamergearhub.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <div className="relative pt-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ el: ".pagination", clickable: true }}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <a
              href="https://github.com/xTony2108/Gympro-Project"
              target="_blank"
            >
              <img src={gympro} alt="Gympro" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://github.com/xTony2108/GamerGear-Hub"
              target="_blank"
            >
              <img src={gamergearhub} alt="Gamer Gear Hub" />
            </a>
          </SwiperSlide>
          <div className="pagination flex justify-center py-6 gap-2"></div>
        </Swiper>
      </div>
    </>
  );
};
