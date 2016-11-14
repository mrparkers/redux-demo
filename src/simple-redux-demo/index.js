import React from 'react';
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case '+': return state + action.value;
        case '-': return state - action.value;
        default: return state;
    }
};

export default class SimpleReduxDemo extends React.Component {
    constructor(props) {
        super(props);

        this.store = createStore(reducer);

        this.store.subscribe(() => {
            console.log('New State:', this.store.getState());
            this.forceUpdate();
        });

        this.updateTimer = this.updateTimer.bind(this);
    }

    componentDidMount() {
        setInterval(this.updateTimer, 1000);
    }

    updateTimer() {
        this.store.dispatch({ type: '+', value: 1 })
    }

    render() {
        return (
            <div className="ui container page">
                <h2>Simple Redux Demo - Timer</h2>
                <h1 className="timer">{this.store.getState()}</h1>
            </div>
        );
    }
}
