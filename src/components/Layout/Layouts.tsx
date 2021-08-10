import * as S from "./Layouts.styled";

interface IChildrenProp {
  children: JSX.Element|JSX.Element[],
}

export const HeaderPaddingLayout = ({ children }: IChildrenProp): JSX.Element => {
  return <S.HeaderPaddingWrapper>{children}</S.HeaderPaddingWrapper>
};

export const ContentPageLayout = ({ children }: IChildrenProp): JSX.Element => {
  return <S.PageWidthWrapper>{children}</S.PageWidthWrapper>
}
