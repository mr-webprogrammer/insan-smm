import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import img1 from "../images/header-phone.png";
import img2 from "../images/header-mac.png";

import wide from "../images/wide-logo.png";
import { useTranslation } from "react-i18next";

function Header() {

  const [change, setChange] = useState(false);
  const { t } = useTranslation()


  setTimeout(
    () => {
      setChange(!change)
    }, 6000
  )

  return (
    <Wrapper>
      <Navbar />
      <main className="container flex align-center justify-between mobile-column">
        <div className="flex column">
          <small>{t("companyname")}</small>
          <h1>{t("header")}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex align-center   justify-start buttons ">
            <button>{t("boglanish")}</button>
            <button className="secondary">{t("xizmatlar")}</button>
          </div>
        </div>
        <div className="images">
          <img className="top phone" src={img1} />
          <img src={wide} alt="" className="wide" />
        </div>
      </main>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.header`
  background: linear-gradient(
    79.53deg,
    #d9d9d9 -110.66%,
    rgba(217, 217, 217, 0) 71.4%
  );
  main {
    padding-top: 40px;
    padding-bottom: 100px;
    & > div:first-of-type {
      gap: 30px;
    }
    .buttons {
      gap: 30px;
      width: fit-content;
    }
    .images{
      width: 100%;
      flex: 0 0 40%;
      position: relative;
      /* transform: translateY(-130px); */
      top: 0;
      .top {
        position: absolute;
        z-index: 9;
        left: -30px;
        top: 50%;

        @media (max-width: 768px) {
          width: 100% !important;
          margin-top: 90px;
          margin-left: 50px;
          background-position: center;
         position: relative;
         overflow: hidden;
         height: 250px;
        }
      }


      .wide{
        position: relative;
        /* top: -85%; */
        right: 5%;
        opacity: 0.08;
        width: 300px;
        /* transform: translateY(-70px); */
        /* transform: translateX(100px); */
        z-index: 1;
        @media (max-width:1400px) {
          top: -68%;
          right: 0;
        }
        @media (max-width: 768px) {
          display: none;
        }
      }
      img {
        width: 100%;
        position: absolute;
        left: 40%;
        bottom: -60%;
        transform: scale(1) translateY(-10%);
      }
      .phone {
        transform: translateX(-30px) scale(1);
      }
    }
  }
`;
