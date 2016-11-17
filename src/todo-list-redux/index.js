import React from 'react';

import {connect} from 'react-redux';

const Title = ({text, onClick}) => <h2 onClick={onClick}>{text}</h2>

export class TodoListRedux extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.setText = this.setText.bind(this);
    }

    addTodo() {
        const newTodo = this.refs.input.value;
        this.props.addTodo(newTodo);

        this.refs.input.value = '';
    }

    removeTodo(index) {
        this.props.removeTodo(index);
    }

    setText() {
        const newTitle = this.refs.title.value;
        this.props.setText(newTitle);
    }

    render() {
        const {todos, title: {text, isTextbox}, toggleTextbox} = this.props;

        return (
            <div className="ui container page">
                {
                    isTextbox ? <input type="text" ref="title" defaultValue={text} onBlur={this.setText} /> : <Title onClick={toggleTextbox} text={text} />
                }
                <ul className="ui bulleted list">
                    {todos.map((todo, index) => <li onClick={this.removeTodo.bind(null, index)} className="item">{todo}</li>)}
                </ul>
                <input type="text" ref="input"/>
                <button className="ui primary" onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

const mapStateToProps = ({todos, title}) => {
    return {
        todos,
        title
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo(value) {
            dispatch({
                type: 'ADD_TODO',
                value
            });
        },
        removeTodo(index) {
            dispatch({
                type: 'REMOVE_TODO',
                value: index
            })
        },
        toggleTextbox() {
            dispatch({
                type: 'TOGGLE_TEXTBOX'
            });
        },
        setText(text) {
            console.log('here2');
            dispatch({
                type: 'SET_TEXT',
                value: text
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListRedux);