import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recordings from "./components/Recordings";
import Secret from "./components/Secret";
import "./styles.css";

import Gelbooru from "./components/booru/gelbooru";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recordings" component={Recordings} />
        <Route exact path="/secret" component={Secret} />
        <Route path="/secret/:id/:page" children={<Gelbooru />} />
        <Route path="/secret/:id" children={<Gelbooru />} />
      </Switch>
    </Router>
  );
}
