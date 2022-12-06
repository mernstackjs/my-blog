import React from "react";
import styled from "styled-components";

const AddsStyled = styled.div`
  background-color: white;
  display: flex;
  width: 30%;
  height: 100vh;

  @media (max-width: 750px) {
    display: none;
  }
`;
const Adds = () => {
  return <AddsStyled>Adds</AddsStyled>;
};

export default Adds;
