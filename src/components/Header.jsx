import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import img1 from "../images/header-phone.png";
import img2 from "../images/header-mac.png";

import wide from "../images/wide-logo.png";

function Header() {

  const [change, setChange] = useState(false);

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
          <small>Insan Marketing Agency</small>
          <h1>Insan - insonlar uchun marketing agentligi</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex align-center   justify-start buttons ">
            <button>Bog’lanish</button>
            <button className="secondary">Xizmatlars</button>
          </div>
        </div>
        <div className="images">
          <div id="cf">
            <img className="top" src={change ? img1 : img2} />
          </div>
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

      


      .wide{
        position: absolute;
        top: -55%;
        right: 5%;
        opacity: 0.08;
        width: 300px;
        @media (max-width:1400px) {
          top: -65%;
          right: 0;
        }
      }
      img{
        width: 100%;
        transform: scale(1.2) translateY(30%);
      }
    }
  }
`;
