import React, { Component } from 'react';
import './Dashboard.css';
import {  Switch, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import radianLogo from './assets/images/radian.jpg';
import AuditDetails from './components/Details/AuditDetails';
import Main from './components/Main/Main';




class Dashboard extends Component {

  render() {
    //console.log(this.props.auditData);
    return (
      <div>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>
      
      </div>
      <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem >Radar Rates</BreadcrumbItem>
      </Breadcrumb>
      <Switch>
        <Route  exact path="/" component={Main} />
        <Route path="/details/:id" component={AuditDetails} />
      </Switch>
        </div>
      </div>
    );
  }
}
export default Dashboard;


