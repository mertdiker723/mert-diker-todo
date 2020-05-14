import React, { Component } from 'react'
import "./todo.scss";
import ListItem from './listItem';

export default class TodoList extends Component {

    render() {

        return (
            <ul className="todo-list">
                {this.props.todos.map((item, index) => {
                    return (
                        <ListItem
                            history={this.props.history}
                            id={item.id}
                            key={item.id}
                            item={item.title}
                            index={index}
                            deleteTodo={this.props.deleteTodo}
                        />)
                })}
            </ul>
        )
    }
}