import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colours.yellow};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.farro};
  font-size: 15rem;
  line-height: 1;
  position: relative;
`;

export const Slash = styled.div`
  font-size: 15rem;
  height: 100%;
`;


export const Bracket = styled.div`
  height: 100%;
  left: -20px;
  bottom: 10px;
  position: relative;
`;

export const LetterM = styled.div`
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  align-items: flex-end;
  font-size: 8rem;
  left: -120px;
  top: 100%;
  position: relative;
`;
