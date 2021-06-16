import { useAppSelector, useAppDispatch } from "helpers/hooks/redux";

// Actions
import { toggleTheme } from "store/reducers/themeReducer";

// Styles
import * as S from "./Header.styled";

const Header = () : JSX.Element => {
  const theme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const toggleBtnClicked = () => {
    dispatch(toggleTheme());
    window.localStorage.setItem("theme", theme.name === "light" ? "dark" : "light");
  }

  return (
    <S.Wrapper>
      <h1>Header</h1>
      <button onClick={toggleBtnClicked}>Toggle theme</button>
    </S.Wrapper>
  )
}

export default Header;
