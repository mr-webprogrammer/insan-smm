import React, { useState } from "react";
import styled from "styled-components";
import SlideTop from "./SlideTop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonial from "./Testimonial";
import img1 from "../images/testimonial.png";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const {t} = useTranslation()
  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };
  return (
    <Wrapper className="container">
      <SlideTop
        next={nextSlide}
        prev={prevSlide}
        title={t("mijozlarfikri")}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore."
      />
      <div className="devider md"></div>
      <main>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Testimonial
              name={"Ismoil Turdaliyev"}
              job="Software Developer"
              img={img1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Ismoil Turdaliyev"}
              job="Software Developer"
              img={img1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Ismoil Turdaliyev"}
              job="Software Developer"
              img={img1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Ismoil Turdaliyev"}
              job="Software Developer"
              img={img1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </SwiperSlide>
        </Swiper>
      </main>
    </Wrapper>
  );
}

export default Testimonials;
const Wrapper = styled.div``;
