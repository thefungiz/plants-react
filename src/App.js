import React from 'react';
import './App.css';
import KingdomDropDown from './KingdomDropDown';
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
        <nav className="navbar pure-menu pure-menu-horizontal header-margin-bottom">
          <a href="#" className="pure-menu-heading pure-menu-link ">Plants!</a>
          <NavLink className="pure-menu-heading pure-menu-link" to="/drill">Kingdom Dropdown</NavLink>
        </nav>
        <ul className="header header-style">
        </ul>
        <div className="content container">
          <Route exact path="/" component={Home} />
          <Route exact path="/drill" component={KingdomDropDown} />
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
