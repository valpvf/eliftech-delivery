import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100vw;
  padding: 15px;
`;

export const ListSyled = styled.ul`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px 40px;
  font-size: 20px;
  color: #4786d9;

  &.active {
    position: relative;
    text-decoration: underline;
    font-weight: 700;
    color: #2361b2;
  }
  &[datatype="one"] {
    border-right: 2px solid #651919;
  }
`;
