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
  0% { bottom: 0; }
  100% { bottom: 60px; }
`;

const letterMAnimation = keyframes`
  0% { left: -25%; top: 0; }
  50% { left: -25%; top: 60px; }
  100% { left: -40%; top: 60px; }
`;

export const AnimatedWrapper = styled(Wrapper)`
  ${LetterD} {
    animation: 1s forwards ${letterDAnimation} ease-in-out 1s;
  }

  ${LetterM} {
    animation: 2s forwards ${letterMAnimation} ease-in-out 1s;
  }
`;
