import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.backgroundColour};
  background-image: ${({ theme }) => theme.background.backgroundImage};
  color: ${({ theme }) => theme.colours.font};
  font-family: ${({ theme }) => theme.fonts.openSans};
  line-height: 1.5;
  min-height: 100vh;

  h1, h2, h3, h4, p {
    margin: 0;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.fonts.farro};
    font-size: 3rem;
  }

  .farro {
    font-family: ${({ theme }) => theme.fonts.farro};
  }

  .code {
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;
