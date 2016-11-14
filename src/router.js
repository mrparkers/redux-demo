import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './app';
import Test from './test';
import SimpleReduxDemo from './simple-redux-demo';

export default class extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Test} />
                    <Route path="/simple" component={SimpleReduxDemo} />
                </Route>
            </Router>
        );
    }
}