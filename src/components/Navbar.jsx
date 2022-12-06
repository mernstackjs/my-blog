import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 2px 1px 20px 2px rgba(0, 0, 0, 0.19);
  padding: 10px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  @media (max-width: 750px) {
    padding: 7px 15px;
  }
`;

const Logo = styled.h3`
  font-size: 30px;
  color: black;
  padding: 0;
  margin: 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  padding: 0 10px;
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`;
const SearchBox = styled.div`
  border: 1px solid black;
  padding: 5px 16px;
  border-radius: 10px;
  width: 180px;
  margin-left: 100px;
  input {
    outline: none;
    border: none;
    font-size: 20px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Button = styled.button`
  boder: none;
  outline: none;
  padding: 7px 17px;
  background-color: rgb(12, 66, 69);
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Logo>BrandName!</Logo>
      <MenuBox>
        <StyledLink to="/">Toppnyheter</StyledLink>
        <StyledLink to="/Senaste-nytt">Senaste Nytt</StyledLink>
        <StyledLink to="/Bevakningar">Bevakningar</StyledLink>
        <SearchBox>
          <input type="text" placeholder="search..." />
        </SearchBox>
      </MenuBox>

      <Button>Loggin</Button>
    </Wrapper>
  );
};

export default Navbar;
