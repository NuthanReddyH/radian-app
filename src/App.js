import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';
import AuditDetails from './components/Details/AuditDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Dashboard} />
        <Route path="/details" component={AuditDetails} />
      </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

