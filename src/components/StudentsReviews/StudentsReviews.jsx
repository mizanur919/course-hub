import React from "react";
import reviews from "../../assets/data/studentsReviews.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const StudentsReviews = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 text-center">
            WHAT OUR STUDENTS SAYS
          </h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-auto">
                    <div className="h-full text-center">
                      <img
                        alt={review.name}
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src={review.image}
                      />
                      <p className="leading-relaxed">{review.review}</p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        {review.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default StudentsReviews;
