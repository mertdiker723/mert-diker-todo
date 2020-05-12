import React, { Component } from 'react'
import TodoList from './todoList/todoList'
import Section from './section/section';
import Immutable from "immutable"; //this.props.todo.get('id','')

export default class TodoListComp extends Component {
    constructor() {
        super();
        this.counterIndex = 0;
        this.state = {
            todo: Immutable.List()
        }
    }
    addTodo = (data) => {
        this.setState((state) => ({
            todo: state.todo.set(this.counterIndex, { id: Math.random(), title: data })
        }), () => {
            this.counterIndex++;
        })
    }

    render() {
        return (
            <div>
                <Section addTodo={this.addTodo} />
                <TodoList todos={this.state.todo} />               
            </div>
        )
    }
}
