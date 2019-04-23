import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from './store/store';
import {BrowserRouter} from "react-router-dom";
import Dashboard from './containers/Dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Dashboard/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

