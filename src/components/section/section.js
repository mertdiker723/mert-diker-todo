import React, { Component } from 'react'
import "./section.scss";

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    clickAdd = () => {
        if (this.state.value.trim() !== '') {
            this.props.addTodo(this.state.value);
            this.setState({
                value: ""
            })
        }
        else {
            alert("Alanı doldurunuz.")
        }
    }
    render() {
        return (
            <div className="section">
                <input value={this.state.value} onChange={this.changeValue} className="section__entry" type="text" />
                <button onClick={this.clickAdd} type="submit" className="section__add">{'Add'}</button>
            </div>
        )
    }
}

export default Section;