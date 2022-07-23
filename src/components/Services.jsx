import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ServiceCard from "./ServiceCard";
import smm from "../images/smm.png";
import web from "../images/website.png";
import branding from "../images/branding.png";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SlideTop from "./SlideTop";
import { useTranslation } from "react-i18next";

function Services() {
  const [custom_swiper, set_swiper] = useState({});
  const {t} = useTranslation()
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };
  return (
    <Wrapper className="container" id="services">
      <SlideTop
        next={nextSlide}
        prev={prevSlide}
        title={t("bizningxizmatlarimiz")}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore."
        }
      />
      <div className="devider md"></div>
      <main>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            }
          }}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          modules={[Pagination]}

        >
          <SwiperSlide>
            <ServiceCard
              img={web}
              title={"Web"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore magna aliqua."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              img={smm}
              title={"Smm"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore magna aliqua."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              img={branding}
              title={"Branding"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore magna aliqua."
              }
            />
          </SwiperSlide>
        </Swiper>
      </main>
    </Wrapper>
  );
}

export default Services;

const Wrapper = styled.div`
  .swiper {
    padding-bottom: 50px;
    padding-top: 30px;
    .swiper-wrapper {
      align-items: stretch;
    }
    .swiper-slide {
      height: unset;
    }
    .swiper-pagination {
      bottom: 0px;
    }
    .swiper-pagination-bullet-active {
      background: #00094c;
    }
  }
`;
