import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import './Dashboard.css';
import './App.css';
import radianLogo from './assets/images/radian.jpg'
import Dashboard from './Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>

      </div>
      <hr />
      <hr />
      <div className="mainContainer">
      <Switch>
        <Route  exact path="/" component={Dashboard} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/home" component={Home} />
      </Switch>
        </div>

          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
