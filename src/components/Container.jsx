import React from "react";
import styled from "styled-components";
import Adds from "./Adds";
import Section from "./Section";
const ContainerStyled = styled.div`
  margin: 20px 75px;
  display: flex;
  gap: 15px;

  @media (max-width: 750px) {
    margin: 20px 5px;
  }
`;
const Container = () => {
  return (
    <ContainerStyled>
      <Section />
      <Adds />
    </ContainerStyled>
  );
};

export default Container;
