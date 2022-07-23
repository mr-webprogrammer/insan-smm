import React from "react";
import styled from "styled-components";
import q from "../images/quote.png";

function Testimonial({ img, name, description, job }) {
  return (
    <Wrapper >
      <p className="sm">
        {description}
      </p>
        <div className="devider half"></div>
      <div className="author">
        <div className="line"></div>
        <div className="flex align-center">
          <img src={img} alt="" />
          <div className="content">
            <p className="line-text">{name}</p>
            <p className="line-text">{job}</p>
          </div>
        </div>
      </div>
      <img src={q} alt="" className="quote" />
    </Wrapper>
  );
}

export default Testimonial;
const Wrapper = styled.div`
  position: relative;
  padding: 30px 30px 24px 30px;
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(242, 242, 242, 0.59);
  box-shadow: 8px 11px 42px rgba(0, 0, 0, 0.04);
  p.sm{
    font-size: 14px;
  }
  p,
  div {
    z-index: 2;
    position: relative;
  }
  .author {
    .flex {
      gap: 12px;
      margin-top: 16px;
      p:last-of-type {
        font-size: 12px;
        margin-top: -10px;
      }
    }
  }
  .quote {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
