import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './app';
import Home from './home';
import SimpleReduxDemo from './simple-redux-demo';
import TodoListStatefulReact from './todo-list-stateful-react';

export default class extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/simple" component={SimpleReduxDemo} />
                    <Route path="/todo-stateful" component={TodoListStatefulReact} />
                </Route>
            </Router>
        );
    }
}