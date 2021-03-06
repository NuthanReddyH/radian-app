import React, { Component } from "react";
import "./Dashboard.css";
import { Switch, Route } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import radianLogo from "../assets/images/radianlogo.png";
import AuditDetails from "../components/Details/AuditDetails";
import Main from "../components/Main/Main";
import Configure from "../components/Configure/Configure";
import xmlDetails from "../components/xmlDetails/xmlDetails";
import StartPage from "../components/StartPage/StartPage";

class Dashboard extends Component {
  toggle = () => {};
  render() {
    return (
      <>
        <Navbar className="navcontainer" expand="md">
        
          <NavbarBrand>
            <img src={radianLogo} className="logo" alt="RADIAN" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Data Load</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/xml">Configure XML</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/xml" component={Configure} />
            <Route path="/details/:id" component={AuditDetails} />
            <Route path="/xmlDetails/:id" exact component={xmlDetails} />
          </Switch>
        </>
      </>
    );
  }
}

export default Dashboard;
