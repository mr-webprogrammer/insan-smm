import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function FAQs() {
  const {t} = useTranslation() ;
  let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;
      this.classList.toggle("active");
      console.log(panel.style.maxHeight);
      if (panel.style.maxHeight === "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0px";
      }
    });
  }
  return (
    <Wrapper className="linear-bg" id="testimonial">
      <div className="container">
        <div className="devider"></div>
        <h1>{t("kimlaruchun")}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          incididunt ut labore.
        </p>
        <div className="devider"></div>
        <main>
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            incididunt ut labore."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae hic
        soluta recusandae voluptate temporibus fugiat et dignissimos cupiditate
        numquam suscipit, excepturi, aut iure earum quod nam. Tempore, atque ea?"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            incididunt ut labore."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae hic
        soluta recusandae voluptate temporibus fugiat et dignissimos cupiditate
        numquam suscipit, excepturi, aut iure earum quod nam. Tempore, atque ea?"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            incididunt ut labore."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae hic
        soluta recusandae voluptate temporibus fugiat et dignissimos cupiditate
        numquam suscipit, excepturi, aut iure earum quod nam. Tempore, atque ea?"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            incididunt ut labore."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae hic
        soluta recusandae voluptate temporibus fugiat et dignissimos cupiditate
        numquam suscipit, excepturi, aut iure earum quod nam. Tempore, atque ea?"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            incididunt ut labore."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae hic
        soluta recusandae voluptate temporibus fugiat et dignissimos cupiditate
        numquam suscipit, excepturi, aut iure earum quod nam. Tempore, atque ea?"
          />
        </main>
      </div>
      <div className="devider"></div>
    </Wrapper>
  );
}

export default FAQs;
const Wrapper = styled.div`
  text-align: center;
  main {
    text-align: left;
    max-width: 1000px;
    margin: 0 auto;
    article {
      margin-bottom: 20px;
      .top {
        justify-content: space-between;
        gap: 30px;
        padding: 10px 0;
        cursor: pointer;
        svg {
          width: 25px;
        }
        &.active {
          svg path {
            stroke: #00094c;
          }
        }
      }
      & > p {
        padding-top: 10px;
        font-size: 16px;
        line-height: 170%;
        color: #555;
        overflow: hidden;
        transition: all 0.3s;
      }
    }
  }
`;

function Accordion({ title, description }) {
    const [active, setactive] = useState(false)
  const contentRef = useRef();
  const toggle = () => {
    contentRef.current.style.maxHeight === "0px"
      ? (contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px")
      : (contentRef.current.style.maxHeight = "0px");
      setactive(!active)
  };
  return (
    <article>
      <div
        onClick={toggle}
        className={`top accordion flex align-center ${active ? 'active' : ''}`}
      >
        <p>{title}</p>
        <svg
          width="47"
          height="25"
          viewBox="0 0 47 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.02466 4L23.1934 21L42.3621 4"
            stroke="#D9D9D9"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p ref={contentRef} style={{ maxHeight: "0px" }}>
        {description}
      </p>
    </article>
  );
}
