import React, { useState } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import SlideTop from "./SlideTop";
import p1 from "../images/project1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";

function Projects() {
  const [custom_swiper, set_swiper] = useState({});
  const {t} = useTranslation()
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };
  return (
    <Wrapper className="linear-bg" >
      <div className="devider"></div>
      <div className="container">
        <SlideTop
          next={nextSlide}
          prev={prevSlide}
          title={t("bizningishlarimiz")}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore."
          }
        />
        <div className="devider md"></div>
        <main>
          <Swiper
            slidesPerView={1}
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onInit={(ev) => {
              set_swiper(ev);
            }}
          >
            <SwiperSlide>
              <ProjectItem
                title={"ACCA"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nemo tenetur incidunt voluptatum consectetur porro necessitatibus! Aliquid atque pariatur perspiciatis magnam esse iste eligendi praesentium ipsam vel. Quasi, porro? Veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa officiis autem laborum quo blanditiis, sed eveniet. Ullam dicta aliquam ab dolorem."
                }
                img={p1}
              />
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
      <div className="devider"></div>
    </Wrapper>
  );
}

export default Projects;
const Wrapper = styled.div``;
