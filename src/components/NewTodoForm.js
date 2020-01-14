import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class NewTodoForm extends Component {
    state = {
        task: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        })
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New todo</label>
                <input
                    type="text"
                    placeholder="New Todo"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
