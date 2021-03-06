import styled, { keyframes } from "styled-components";

const fullNameAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  background-image: ${props => props.theme.backgroundImage};
  display: flex;
  font-size: 15rem;
  justify-content: center;
  min-height: 100vh;

  .name {
    animation: 1s ${fullNameAnimation} 4s;
    animation-fill-mode: forwards;
    font-size: 3rem;
    line-height: 1;
    position: absolute;
    opacity: 0;
  }

  .avid {
    top: 45%;
    left: 50%;
    color: ${props => props.theme.globals.font};
  }

  .ills {
    left: 60%;
    top: 97%;
    color: ${props => props.theme.colours.font};
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative
`;
