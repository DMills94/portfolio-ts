// Components
import Logo from "components/Logo/Logo"

// Styles
import * as S from "./Home.styled";

const Home = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Logo />
      <h3>Welcome to my portfolio 👋</h3>
    </S.Wrapper>
  );
};

export default Home;
