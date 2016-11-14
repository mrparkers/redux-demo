import React from 'react';

const Todo = ({text, remove}) => <li className="item" onClick={remove}>{text}</li>;

export default class TodoListStatefulReact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        const newTodo = this.refs.input.value,
            {todos} = this.state;

        this.setState({
            todos: [...todos, newTodo]
        });

        this.refs.input.value = '';
    }

    remove(index) {
        const {todos} = this.state;

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ]
        });
    }

    render() {
        return (
            <div className="ui container page">
                <h2>Todo List (Stateful React Components)</h2>
                <div className="center">
                    <h3>Todo List</h3>
                    <ul className="ui bulleted list">
                        {this.state.todos.map((todo, i) => <Todo text={todo} remove={this.remove.bind(null, i)} />)}
                    </ul>
                    <div className="ui input">
                        <input type="text" placeholder="Todo" ref="input" />
                    </div>
                    <button className="ui primary button" onClick={this.add}>Add Todo</button>
                </div>
            </div>
        );
    }
}
