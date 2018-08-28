import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import ActorsList from "./containers/ActorsList";
import MoviesList from "./containers/MoviesList";
import NotFound from "./components/NotFound";
import MovieFull from "./components/MovieFull";
import ActorFull from "./components/ActorFull";

const App = () => (
  <Router>
    <div>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route path="/actors" component={ActorsList} exact />
        <Route path="/movies" component={MoviesList} exact />
        <Route path="/movies/:id" component={MovieFull} exact />
        <Route path="/actors/:id" component={ActorFull} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
