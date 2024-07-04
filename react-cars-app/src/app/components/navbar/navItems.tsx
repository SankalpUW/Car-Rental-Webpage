import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    mr-4
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-white
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

const StyledLink = styled.a`
  ${tw`
    text-white
    no-underline
  `};

  &:hover {
    ${tw`
      text-gray-700
    `}
  }
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <StyledLink href="#">Home</StyledLink>
          </NavItem>
          <NavItem menu>
            <StyledLink href="#">Cars</StyledLink>
          </NavItem>
          <NavItem menu>
            <StyledLink href="#">Services</StyledLink>
          </NavItem>
          <NavItem menu>
            <StyledLink href="#">Contact Us</StyledLink>
          </NavItem>
        </ListContainer>
     </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <StyledLink href="#">Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink href="#">Cars</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink href="#">Services</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink href="#">Contact Us</StyledLink>
      </NavItem>
    </ListContainer>
  );
}
