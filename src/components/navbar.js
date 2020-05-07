import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <input className="input-search" placeholder="search" />
            </div>

        )
    }
}

export default Navbar;