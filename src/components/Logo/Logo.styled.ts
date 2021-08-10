import styled, { keyframes } from "styled-components";

export const LetterD = styled.div`
  display: flex;
  position: relative;
`;

export const Slash = styled.div`
  font-size: 1em;
  height: 100%;
  position: relative;
`;


export const Bracket = styled.div`
  left: -5%;
  height: 100%;
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
      color: ${({ theme }) => theme.colours.yellow}
    }

    ${LetterM} {
      color: ${({ theme }) => theme.colours.white};
    }
  }
`;

const letterDAnimation = keyframes`
  0% { opacity: 0; }
  50% { bottom: 0; opacity: 1; }
  100% { bottom: 60px; opacity: 1; }
`;

const letterMAnimation = keyframes`
  0% { opacity: 0; }
  33% { left: -25%; top: 0; opacity: 1; }
  66% { left: -25%; top: 60px; opacity: 1; }
  100% { left: -40%; top: 60px; opacity: 1; }
`;

export const AnimatedWrapper = styled(Wrapper)`
  ${LetterD} {
    animation: 2s forwards ${letterDAnimation} ease-in-out 1s;
    opacity: 0;
  }

  ${LetterM} {
    animation: 3s forwards ${letterMAnimation} ease-in-out 1s;
    opacity: 0;
  }
`;
