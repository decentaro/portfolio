import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);



  const styleNavbrand = {
    fontSize: 30,
    fontFamily: 'Cinzel, Sans-serif',
    paddingTop: 10,
    paddingBottom: 10,
    color: "#177E89"
}

  return (
    <Router>
      <div>
        <div className="myNavbar">
          <Navbar color="faded" light>
              <NavbarBrand href="/home" className="mr-auto" style={styleNavbrand}>MarcDy</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                      <NavItem>
                          <NavLink href="/home">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/about">About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/contact">Contact</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/projects">Projects</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
        </div>
        <Route path="/home" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
      </div>
    </Router>
  );
}
export default App;
