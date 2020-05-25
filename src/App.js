import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import { Home } from "./views/Home";
import ProductPreview from "./components/ProductPreview";
import CreateRecomendation from "./views/CreateRecomendation";
import { Container } from "@material-ui/core";

import { AppProvider } from "./context/app";
import { APP_PREFIX_URL } from "./config/app";

function App() {
  return (
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
          </Container>
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
