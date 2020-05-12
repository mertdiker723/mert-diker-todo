import React, { Component } from 'react'
import "./todo.scss";
import {  Link } from "react-router-dom";

class ListItem extends Component {

    render() {
        return (
            <Link to={`/routePage/${this.props.id}`} className="todoList__li">
                <span>{this.props.item}</span>
            </Link>
        )
    }
}

export default ListItem;