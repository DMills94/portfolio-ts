import * as S from "./Logo.styled";

interface ILogo {
  animated?: boolean
  extraClasses?: string
}

const Logo = ({ animated = false, extraClasses }: ILogo): JSX.Element => {
  const LogoWrapper = animated ? S.AnimatedWrapper : S.Wrapper;
  return (
    <LogoWrapper className={`logo farro ${extraClasses}`}>
      <S.Slash>/</S.Slash>
      <S.Bracket>&gt;</S.Bracket>
      <S.LetterM>M</S.LetterM>
    </LogoWrapper>
  );
};

export default Logo;
