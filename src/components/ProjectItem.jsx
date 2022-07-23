import React from "react";
import styled from "styled-components";

function ProjectItem({ img, title, description }) {
  return (
    <Wrapper className="flex align-center mobile-column">
      <img src={img} alt={title} />
      <main>
        <h3>Acci</h3>
        <div className="devider half"></div>
        <div className="line"></div>
        <div className="devider half"></div>
        <p className="md">{description}</p>
      </main>
    </Wrapper>
  );
}

export default ProjectItem;
const Wrapper = styled.div`
  gap: 60px;
  main {
    flex: 0 0 400px;
    width: 100%;
  }
  img {
    aspect-ratio: 43/24;
    object-fit: cover;
    flex: 0 0 calc(100% - 460px);
    overflow: hidden;
      
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    font-size: 18px;
  }
` 
