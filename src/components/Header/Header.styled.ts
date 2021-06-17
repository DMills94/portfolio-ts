import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.yellow};
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  transition: all 0.3s ease-out;
  width: 100%;

  &.homepage {
    background-color: transparent;
  }

  .theme-btn {
    cursor: pointer;
  }
`;

export const NavItem = styled(Link)`
  border-radius: 16px;
  color: ${({ theme }) => theme.colours.font};
  margin-right: 2rem;
  font-size: 2rem;
  font-size: bold;
  position: relative;
  text-decoration: none;

  &:after {
    color: ${({ theme }) => theme.colours.yellow};
    content: attr(data-text);
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: width 0.3s ease-out;
    width: 0;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
