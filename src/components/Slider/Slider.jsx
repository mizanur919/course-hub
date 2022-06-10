import React from "react";
import "./Slider.css";
import slideData from "../../assets/data/slideData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Slider = () => {
  return (
    <>
      <section className="w-full h-[650px]">
        <Swiper
          className="mySwiper w-full h-full"
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.name}
              />
              <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="course_title text-3xl md:text-5xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-white font-bold">
                  {slide.name}
                </h1>
                <div className="my-5 mt-9">
                  <button className="border bg-gray-300 text-black border-r-amber-300 py-2 px-5">
                    Enroll Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
