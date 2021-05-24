import * as S from "./Logo.styled";

const Logo = () : JSX.Element => {
  return (
    <S.Wrapper className="logo farro">
      <S.Slash>/</S.Slash>
      <S.Bracket>&gt;</S.Bracket>
      <S.LetterM>M</S.LetterM>
    </S.Wrapper>
  )
};

export default Logo;
