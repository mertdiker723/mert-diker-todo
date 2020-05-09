import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Section from './components/section/section';
import TodoList from './components/todoList/todoList';
import Sidebar from './components/sidebar/sidebar';

//PureComponent

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: []
    }
  }

  addTodo = (data) => {
    const values = this.state.todo;
    values.push(data);
    this.setState({
      todo:values
    })
  }


  render() {
    return (
      <div className="container">
        <Navbar />
        <Sidebar />
        <Section addTodo={this.addTodo}/>
        <TodoList todos={this.state.todo} />
      </div>
    )
  }
}
