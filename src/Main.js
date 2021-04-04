import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Sushi Mama</h1>
          <h3>424 Newtown Rd, Virginia Beach, VA 23462</h3>
          <h4>(757) 554 - 0120</h4>
          <ul className="header">
            <li><NavLink exact to="/">About Us</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Menu" component={Menu}/>
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;