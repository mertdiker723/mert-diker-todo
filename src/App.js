import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';

import Section from './components/section';
import TodoList from './components/todoList';
import Sidebar from './components/sidebar';



export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Sidebar/>
        <Section/>
        <TodoList/>        
      </div>
    )
  }
}
