import * as S from "./Logo.styled";

interface ILogo {
  animated?: boolean
}

const Logo = ({ animated = false }: ILogo): JSX.Element => {
  const LogoWrapper = animated ? S.AnimatedWrapper : S.Wrapper;
  return (
    <LogoWrapper className="logo farro">
      <S.Slash>/</S.Slash>
      <S.Bracket>&gt;</S.Bracket>
      <S.LetterM>M</S.LetterM>
    </LogoWrapper>
  );
};

export default Logo;
