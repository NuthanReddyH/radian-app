import React, { Component } from 'react';
import './App.css';
import './Dashboard.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import radianLogo from './assets/images/radian.jpg';
import AuditDetails from './components/Details/AuditDetails';
import Main from './components/Main/Main';




class Dashboard extends Component {

  render() {
    console.log(this.props.auditData);
    return (
      <div>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>
      
      </div>
      <div>
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


