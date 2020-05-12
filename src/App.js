import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

import { BrowserRouter, Route } from 'react-router-dom';
import TodoListComp from './components/TodoListComp';
import RoutePage from './components/routed/routePage';

export default class App extends Component {


  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Route exact path="/" component={TodoListComp} />
          <Route path="/routePage/:id" component={RoutePage} />
        </BrowserRouter>
      </div>
    )
  }
}