import { useAppSelector, useAppDispatch } from "helpers/hooks/redux";
import { useLocation } from "react-router-dom";

// Components
import Logo from "components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLightbulb } from "@fortawesome/free-solid-svg-icons";

// Actions
import { toggleTheme } from "store/reducers/themeReducer";

// Styles
import * as S from "./Header.styled";

const Header = () : JSX.Element => {
  const { name: themeName } = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const toggleBtnClicked = () => {
    dispatch(toggleTheme());
    window.localStorage.setItem("theme", themeName === "light" ? "dark" : "light");
  }

  const solidHeader = pathname === "/";

  return (
    <S.Wrapper className={solidHeader ? "homepage" : ""}>
      <nav className="flex">
        <S.NavItem className="farro bold" to="/"><Logo extraClasses={solidHeader ? "" : "on-header"} fa-border/></S.NavItem>
        <S.NavItem className="farro bold" data-text="About" to="/about">About</S.NavItem>
        <S.NavItem className="farro bold" data-text="Projects" to="/projects">Projects</S.NavItem>
      </nav>
      <FontAwesomeIcon
        className="theme-btn"
        icon={faLightbulb}
        mask={faCircle}
        onClick={toggleBtnClicked}
        role="button"
        size="2x"
        transform="shrink-5"
      />
    </S.Wrapper>
  );
}

export default Header;
