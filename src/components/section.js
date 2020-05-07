import React, { Component } from 'react'

class Section extends Component {
    render() {
        return (
            <div className="section">
                <input className="input-todo" type="text" />
                <button className="btn-todo">Add</button>
            </div>
        )
    }
}


export default Section;