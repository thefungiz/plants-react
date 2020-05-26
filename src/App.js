import React from 'react';
import './App.css';
import StateSearch from './state/StateSearch';
import Home from "./Home"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div>
        <nav className="menu navbar pure-menu pure-menu-horizontal header-margin-bottom">
          <NavLink className="menu-link pure-menu-heading pure-menu-link" to="/"><img alt="logo" className="logo" src="https://freesvg.org/img/eco_spadassin_green_leaf_2_icon.png" /></NavLink>
          <NavLink className="menu-link pure-menu-heading pure-menu-link" to="/state">State Search</NavLink>
        </nav>
        <ul className="header header-style">
        </ul>
        <div className="content container">
          <Route exact path="/" component={Home} />
          <Route exact path="/state" component={StateSearch} />
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
