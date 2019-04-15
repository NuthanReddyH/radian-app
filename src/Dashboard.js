import React, { Component } from "react";
import "./Dashboard.css";
import { Switch, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";
import radianLogo from "./assets/images/radian.jpg";
import AuditDetails from "./components/Details/AuditDetails";
import Main from "./components/Main/Main";

class Dashboard extends Component {
  render() {
    //console.log(this.props.auditData);
    return (
      <div>
        <Navbar className="navcontainer" expand="md">
          <NavbarBrand>
            <img src={radianLogo} className="logo" alt="RADIAN" />
          </NavbarBrand>
        </Navbar>

        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id" component={AuditDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Dashboard;