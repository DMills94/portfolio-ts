import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.globals.backgroundColour};
  background-image: ${({ theme }) => theme.globals.backgroundImage};
  color: ${({ theme }) => theme.colours.font};
  font-family: ${({ theme }) => theme.fonts.openSans};
  line-height: 1.5;
  min-height: 100vh;

  h1, h2, h3, h4, p {
    margin: 0;

    &.bold {
      font-weight: 600;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.fonts.farro};
    font-size: 3rem;
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
