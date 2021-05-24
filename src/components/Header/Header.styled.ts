import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.yellow};
  color: ${({ theme }) => theme.colours.font};
  display: flex;
  height: 100px;
  width: 100%;
`;
