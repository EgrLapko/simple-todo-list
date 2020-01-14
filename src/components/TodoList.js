import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

export default class TodoList extends Component {
    state = { 
        todos:[] 
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove = (id) => {
        this.setState({   
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    } 

    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        return (
            <div className="todo-list">
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>
                    {
                        this.state.todos.map(todo => {
                            return (
                                <Todo 
                                    key={todo.id} 
                                    id={todo.id}
                                    task={todo.task} 
                                    removeTodo={this.remove} 
                                    updateTodo={this.update}
                                    completed={todo.completed}
                                    toggleCompletion={this.toggleCompletion}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
