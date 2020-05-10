import React, { Component } from 'react'
import "./todo.scss";
import ListItem from './listItem';

export default class TodoList extends Component {  
    render() {
        return (
            <ul className="todoList">
                {this.props.todos.map((item, index) => {                    
                    return <ListItem id={item.id} deleteItemFromTodo={(val) => this.props.deleteTodo(val)} key={item.id} item={item.todoVal} index={index}/>                        
                })}
            </ul>
        )
    }
}