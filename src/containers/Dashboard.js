import React, {Component} from "react";
import "./Dashboard.css";
import {Switch, Route} from "react-router-dom";
import {Navbar, NavbarBrand,NavItem,NavLink ,Nav} from "reactstrap";
import radianLogo from "../assets/images/radian.jpg";
import AuditDetails from "../components/Details/AuditDetails";
import Main from "../components/Main/Main";
import Configure from "../components/Configure/Configure";

class Dashboard extends Component {
    toggle = () => {

    }
    render() {
        //console.log(this.props.auditData);
        return (
          <div>
            <Navbar className="navcontainer" expand="md">
              <NavbarBrand>
                <img src={radianLogo} className="logo" alt="RADIAN" />
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Data Load</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/xml">
                    Configure XML
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>

            <div>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/xml" component={Configure} />
                <Route path="/details/:id" component={AuditDetails} />
              </Switch>
            </div>
          </div>
        );
    }
}

export default Dashboard;