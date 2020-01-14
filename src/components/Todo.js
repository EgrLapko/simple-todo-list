import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        isEditing: false,
        task: this.props.task 
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    }

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate = (event) => {
        event.preventDefault(); 

        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleToggle = (event) => {
        this.props.toggleCompletion(this.props.id)
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}> 
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
                    <li className={this.props.completed ? "completed" : ""}
                        onClick={this.handleToggle}
                    > 
                        {this.props.task} 
                    </li> 
                </div>
            );
        }
        return result;
    }
}
