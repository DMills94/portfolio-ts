import styled, { keyframes } from "styled-components";

export const Slash = styled.div`
  font-size: 1em;
  height: 100%;
  position: relative;
`;


export const Bracket = styled.div`
  height: 100%;
  left: -5%;
  bottom: 0;
  position: relative;
`;

export const LetterM = styled.div`
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  align-items: flex-end;
  font-size: 0.5em;
  left: -25%;
  top: 0;
  position: relative;
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colours.yellow};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.farro};
  font-size: 1em;
  line-height: 1;
  position: relative;

  &.on-header {
    ${Slash}, ${Bracket} {
      color: ${({ theme }) => theme.colours.black}
    }

    ${LetterM} {
      color: ${({ theme }) => theme.colours.red};
    }
  }
`;

const letterDAnimation = keyframes`
  0% { bottom: 0; }
  100% { bottom: 25%; }
`;

const letterMAnimation = keyframes`
  0% { left: -25%; top: 0; }
  50% { left: -25%; top: 25%; }
  100% { left: -40%; top: 25%; }
`;

export const AnimatedWrapper = styled(Wrapper)`
  ${Slash}, ${Bracket} {
    animation: 1s ${letterDAnimation} ease-in-out 1s;
    animation-fill-mode: forwards;
  }

  ${LetterM} {
    animation: 2s ${letterMAnimation} ease-in-out 1s;
    animation-fill-mode: forwards;
  }
`;
