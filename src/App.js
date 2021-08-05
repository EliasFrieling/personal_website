import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
