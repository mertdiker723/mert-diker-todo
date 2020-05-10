import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Section from './components/section/section';
import TodoList from './components/todoList/todoList';
import Sidebar from './components/sidebar/sidebar';
import Immutable from "immutable";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: []
    }
  }
  async componentDidMount() {
    await fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => this.setState({
        todo: data
      }))
      .catch(err => console.log(err));
  }
  addTodo = async (data) => {
    await fetch("http://localhost:3000/posts", {
      method: 'POST',
      body: JSON.stringify({
        todoVal: data
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => this.setState({
        todo: Immutable.List(this.state.todo).push(json)
      }))
      .catch(err => console.log(err));
  }

  deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })

    const deleted = [...Immutable.List(this.state.todo)].filter(item => {
      return item.id !== id
    });

    this.setState({
      todo: deleted
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Sidebar />
        <Section addTodo={this.addTodo} /> {/* iki konpobnent i birleştir. */}
        <TodoList todos={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
/* heigt: 100vh */