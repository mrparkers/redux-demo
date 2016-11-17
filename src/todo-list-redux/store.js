import {createStore, combineReducers} from 'redux';
import React from 'react';
import {Provider} from 'react-redux';

import todocer from './todocer';
import titleReducer from './title-reducer';
import TodoList from './index';

export default class Store extends React.Component {
    constructor(props) {
        super(props);

        this.store = createStore(combineReducers({
            todos: todocer,
            title: titleReducer
        }));
    }

    render() {
        return (
            <Provider store={this.store}>
                <TodoList />
            </Provider>
        );
    }
}
