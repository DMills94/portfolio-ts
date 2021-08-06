import * as S from "./Layouts.styled";

interface IChildrenProp {
  children: JSX.Element
}

export const HeaderPaddingLayout = ({ children }: IChildrenProp): JSX.Element => {
  return <S.HeaderPaddingWrapper>{children}</S.HeaderPaddingWrapper>
};

export const PageWidthLayout = ({ children }: IChildrenProp): JSX.Element => {
  return <S.PageWidthWrapper>{children}</S.PageWidthWrapper>
}
