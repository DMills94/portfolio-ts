import { darkTheme, lightTheme, Theme } from "./styles";

interface IAppThemes {
  [index: string]: Theme
}

const THEMES: IAppThemes = {
  dark: darkTheme,
  light: lightTheme,
}

const determineTheme = (initialLoad = false): Theme => {
  const storedTheme = window.localStorage.getItem("theme");
  const browserDefaultIsDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  let themeToUse = lightTheme;

  if (storedTheme) {
    if (initialLoad) themeToUse = THEMES[storedTheme];
    else themeToUse = storedTheme === "dark" ? lightTheme : darkTheme;
  }
  else {
    if (browserDefaultIsDarkMode) {
      themeToUse = darkTheme;
      window.localStorage.setItem("theme", "dark");
    }
    else {
      window.localStorage.setItem("theme", "light");
    }
  }

  return themeToUse;
}

export default determineTheme;
