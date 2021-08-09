import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  flex-grow: 1;
  justify-content: space-around;
`;

export const NavItem = styled(NavLink)`
  align-items: center;
  border-radius: 16px;
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  font-size: 1.5rem;
  position: relative;
  text-decoration: none;

  &:after {
    content: attr(data-text);
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: width 0.6s ease-out;
    width: 0;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.grey};
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  transition: all 0.3s ease-out;
  width: 100%;

  &.homepage {
    background-color: transparent;

    ${NavItem} {
      color: ${({ theme }) => theme.colours.font};
    }
  }

  ${NavItem} {
    color: ${({ theme }) => theme.colours.white};

    &:after {
      color: ${({ theme }) => theme.colours.yellow};
    }

    &.active {
      color: ${({ theme }) => theme.colours.yellow};
    }
  }

  .theme-btn-wrap {
    display: block;
    font-size: 2rem;
    position: relative;
    
    &:before {
      background-color: ${({ theme }) => theme.globals.themeSwitcher};
      border-radius: 50%;
      content: "";
      display: block;
      height: 50%;
      width: 95%;
      position: absolute;
      inset: 25% 2.5%;
      z-index: -1;
    }
  }

  .theme-btn {
    cursor: pointer;
  }
`;
