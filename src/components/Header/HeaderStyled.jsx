import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100vw;
  height: 100px;
  padding: 15px;
`;

export const ListSyled = styled.ul`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 15px 40px;
  color: #000;

  &:active {
    font-size: 18px;
    font-weight: 700;
    color: red;
  }
  &:first-of-type {
    border-right-width: 4px solid #000;
  }
`;
