import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Service from "./pages/Service";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact  path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
