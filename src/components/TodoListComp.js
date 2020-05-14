import React, { Component } from 'react'
import TodoList from './todoList/todoList'
import Section from './section/section';
import Immutable from "immutable";
import { connect } from 'react-redux';
import { addTodoAction, loadTodoAction, deleteTodoAction } from "../action/todoAction";

class TodoListComp extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            todo: Immutable.List()
        }
        this.props.onCallTodo();
    }

    addTodo = async (data) => {
        const idd = Math.random();
        await this.props.onAddTodo({ id: idd, title: data, completed: false });
        this.setState((state) => ({
            todo: state.todo.push({ id: idd, title: data, completed: false })
        }))
    }

    deleteTodo = async (id) => {
        await this.props.onDeleteTodo(id);
        const filteredList = Immutable.List(this.state.todo).filter(item => {
            return item.id !== id
        });
        this.setState({
            todo: filteredList
        })
    }
    render() {
        return (
            <div>
                <Section
                    addTodo={this.addTodo}
                />
                <TodoList
                    history={this.props.history}
                    todos={this.state.todo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allValues: state
    }
}

const mapDispatchToProps = {
    onAddTodo: addTodoAction,
    onCallTodo: loadTodoAction,
    onDeleteTodo: deleteTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComp);