import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todo: []
        }
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({
            todo:data.splice(194)
        }))
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <ul className="todoList">
                    {this.state.todo.map((item,index) => {
                        return <li  className="todoList__li" key={item.id}>{item.title}<button className="delete-todo">Delete</button>||<button className="edit-todo">Edit</button></li>
                    })}
                </ul>
            </div>
        )
    }
}
