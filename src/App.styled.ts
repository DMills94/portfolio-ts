import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.globals.backgroundColour};
  background-image: ${({ theme }) => theme.globals.backgroundImage};
  color: ${({ theme }) => theme.colours.font};
  font-family: ${({ theme }) => theme.fonts.openSans};
  line-height: 1.5;
  min-height: 100vh;

  h1, h2 {
    font-family: ${({ theme }) => theme.fonts.farro};
  }

  .farro {
    font-family: ${({ theme }) => theme.fonts.farro};

    &.bold {
      font-weight: 500;
    }
  }

  .code {
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;
