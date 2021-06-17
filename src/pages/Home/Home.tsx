// Components
import Logo from "components/Logo/Logo";

// Styles
import * as S from "./Home.styled";

const Home = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo animated />
        <h2 className="avid">avid</h2>
        <h2 className="ills">ills</h2>
      </S.LogoWrapper>
    </S.Wrapper>
  );
};

export default Home;
