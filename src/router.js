import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './app';
import Home from './home';
import SimpleReduxDemo from './simple-redux-demo';
import TodoListStatefulReact from './todo-list-stateful-react';
import TodoListRedux from './todo-list-redux/store';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/simple" component={SimpleReduxDemo} />
        <Route path="/todo-stateful" component={TodoListStatefulReact} />
        <Route path="/todo-redux" component={TodoListRedux} />
    </Route>
);

export default class extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
    }
}