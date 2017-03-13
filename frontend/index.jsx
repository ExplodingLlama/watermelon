import React from 'react';
import ReactDOM from 'react-dom';
import feathers from 'feathers-client';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainPage from './MainPage/MainPage.jsx';

// Establish a Socket.io connection
const socket = io();

window.feathersApp = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    // Use localStorage to store our login token
    .configure(feathers.authentication({
        storage: window.localStorage
    }));

const WatermelonRouter = React.createClass({
    render() {
        return <Router history={browserHistory}>
            <Route path='/' component={MainPage}/>
        </Router>
    }
})

ReactDOM.render(<WatermelonRouter />, document.getElementById('container'));
