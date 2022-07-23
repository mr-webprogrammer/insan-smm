import React from "react";
import styled from "styled-components";

function ServiceCard({ img, title, description }) {
  return (
    <Wrapper className="flex align-center">
      <img src={img} alt={title} />
      <main>
        <h3>{title}</h3>
        <p className="sm">{description}</p>
      </main>
    </Wrapper>
  );
}

export default ServiceCard;
const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(242, 242, 242, 0.59);
  box-shadow: 8px 11px 42px rgba(0, 0, 0, 0.04);
  padding: 14px 12px;
  gap: 12px;
  height: 100%;
  h3{
    margin-bottom: 12px;
  }
`;
