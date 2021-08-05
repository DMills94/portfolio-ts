import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  align-items: center;
  border-radius: 16px;
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  font-size: 2rem;
  margin-right: 2rem;
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
  background-color: ${({ theme }) => theme.colours.yellow};
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  transition: all 0.3s ease-out;
  width: 100%;

  ${NavItem} {
    color: ${({ theme }) => theme.colours.black};
    &:after {
      color: ${({ theme }) => theme.colours.red};
    }
  }

  &.homepage {
    background-color: transparent;

  ${NavItem} {
    color: ${({ theme }) => theme.colours.font};
    &:after {
      color: ${({ theme }) => theme.colours.yellow};
    }
  }
}
    }
  }

  .theme-btn {
    cursor: pointer;
  }
`;
