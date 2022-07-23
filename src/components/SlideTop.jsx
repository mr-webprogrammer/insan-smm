import React from "react";
import styled from "styled-components";

function SlideTop({title, description, next, prev}) {
  return (
    <Wrapper className="flex justify-between align-center mobile-column">
      <div className="content flex column align-start text-mobile-center">
        <h1 className="mobile-text-center">{title}</h1>
        <p className="md">
          {description}
        </p>
      </div>
      <div className="arrows flex align-center justify-between">
        <button
          onClick={prev}
          className="secondary flex align-center justify-center slide-next"
        >
          <svg
            width="21"
            height="32"
            viewBox="0 0 21 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 29L3 16L18 3"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="flex align-center justify-center slide-next"
        >
          <svg
            width="21"
            height="32"
            viewBox="0 0 21 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotateY(180deg)" }}
          >
            <path
              d="M18 29L3 16L18 3"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Wrapper>
  );
}

export default SlideTop;
const Wrapper = styled.aside`
  .content {
    max-width: 640px;
    gap: 22px;
  }
  .arrows {
    gap: 15px;
    button {
      width: 60px;
      height: 60px;
      border-radius: 7px;
      svg {
        width: 100%;
        flex: 0 0 15px;
      }
    }
  }
`;
