import React from 'react';
import './App.css';
import FamilyTree from './FamilyTree';
import StateSearch from './StateSearch';
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
          <a href="#" className="menu-link pure-menu-heading pure-menu-link "><img className="logo" src="https://freesvg.org/img/eco_spadassin_green_leaf_2_icon.png" /></a>
          {/* <NavLink className="pure-menu-heading pure-men u-link" to="/tree">Family Tree</NavLink> */}
          <NavLink className="menu-link pure-menu-heading pure-menu-link" to="/state">State Search</NavLink>
        </nav>
        <ul className="header header-style">
        </ul>
        <div className="content container">
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/tree" component={FamilyTree} /> disabling this page for now */}
          <Route exact path="/state" component={StateSearch} />
        </div>
      </div>
    </HashRouter>
  );
}
export default App;