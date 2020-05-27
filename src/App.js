import React from 'react';
import './App.css';
import WorldSearch from './worldsearch/WorldSearch';
import KingdomTree from './kingdomtree/KingdomTree';
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
          <NavLink className="menu-link pure-menu-heading pure-menu-link" to="/kingdom">Plant Kingdom</NavLink>
          <NavLink className="menu-link pure-menu-heading pure-menu-link" to="/world">World Search</NavLink>
        </nav>
        <ul className="header header-style">
        </ul>
        <div className="content container">
          <Route exact path="/" component={Home} />
          <Route exact path="/kingdom" component={KingdomTree} />
          <Route exact path="/world" component={WorldSearch} />
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
