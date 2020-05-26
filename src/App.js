import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import ProductPreview from "./components/ProductPreview";
import CreateRecomendation from "./views/CreateRecomendation";
import Community from "./views/Comunity";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { AppProvider } from "./context/app";
import { APP_PREFIX_URL } from "./config/app";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router basename={APP_PREFIX_URL}>
        <AppProvider>
          <Switch>
            <Container>
              <Route path="/" exact component={Home} />
              <Route
                path="/product"
                component={() => (
                  <ProductPreview showComments showBack showAddRecomendation />
                )}
              />
              <Route
                path="/addRecomendation"
                component={() => <CreateRecomendation />}
              />
              <Route path="/community" component={() => <Community />} />
            </Container>
          </Switch>
        </AppProvider>
      </Router>
    </ThemeProvider>
  );
}

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700
  }
});

export default App;
