// Components
import Logo from "components/Logo/Logo";

// Styles
import * as S from "./Home.styled";

const Home = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo animated />
        <div className="name avid">avid</div>
        <div className="name ills">ills</div>
      </S.LogoWrapper>
    </S.Wrapper>
  );
};

export default Home;
