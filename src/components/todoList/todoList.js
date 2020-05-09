import React, { Component } from 'react'
import "./todoList.css";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }

    makeLine = (e) => {
        if (e.target.nodeName.toLowerCase() === 'span') {
            this.setState({
                show: !this.state.show
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <ul className="todoList">
                    {this.props.todos.map((item, index) => {
                        return <li onClick={this.makeLine} className="todoList__li" key={index}>
                            {
                                this.state.show ? <span>{item}</span> : <span className="todoList__span">{item}</span>
                            }
                            <div className="todoList__buttons">
                                <button className="btn delete-todo">Delete</button>||
                                <button className="btn edit-todo">Edit</button>
                            </div>
                        </li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
