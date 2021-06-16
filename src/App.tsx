import { useAppSelector } from "helpers/hooks/redux";

import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Projects from "pages/Projects/Projects";

// Components
import Header from "components/Header/Header";
import * as S from "./App.styled";

const App = (): JSX.Element => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </S.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
