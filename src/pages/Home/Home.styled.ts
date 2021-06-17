import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  background-image: ${props => props.theme.backgroundImage};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
