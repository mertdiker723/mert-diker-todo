import React, { Component } from 'react'
import "./todo.scss";

class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }

    makeLine = (e) => {
        e.target.textContent.trim().toLowerCase()
        if (e.target.nodeName.toLowerCase() === 'li') {
            this.setState({
                show: !this.state.show
            })
        }
    }

    makeDelete = (id) => {
        this.props.deleteItemFromTodo(id);
    }

    render() {
        return (
            this.state.show ?
                <li onClick={this.makeLine} onDoubleClick={() => this.makeDelete(this.props.id)} className="todoList__li">
                    <span>{this.props.item}</span>
                </li> :
                <li onClick={this.makeLine} onDoubleClick={() => this.makeDelete(this.props.id)} className="todoList__li">
                    <span className="todoList__span">{this.props.item}</span>
                </li>
        )
    }
}

export default ListItem;