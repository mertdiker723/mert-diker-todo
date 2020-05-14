import React, { Component } from 'react'
import "./todo.scss";

class ListItem extends Component {
    render() {
        return (
            <div className="todo-list__li">
                <span>{this.props.item}</span>
                <div className="buttons">
                    <button className="btn buttons__detail" onClick={() => this.props.history.push(`/routePage/${this.props.id}`)}>Detail</button>
                    <button className="btn buttons__delete" onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}




export default ListItem;