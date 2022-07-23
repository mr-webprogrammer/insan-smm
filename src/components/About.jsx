import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import wide from "../images/wide-logo.png";

function About() {
  const { t } = useTranslation()

  return (
    <Wrapper className="container flex align-center mobile-column-reverse">
      <img src={wide} alt="" />
      <main id="about">
        <h1>{t("bizhaqimizda")}</h1>
        <div className="devider half"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <div className="devider half"></div>
        <button>{t("xizmatlar")}</button>
      </main>
    </Wrapper>
  );
}

export default About;
const Wrapper = styled.div`
  gap: 80px;
  img {
    @media (max-width:768px) {
      width: 100%;
    }
  }
`;
