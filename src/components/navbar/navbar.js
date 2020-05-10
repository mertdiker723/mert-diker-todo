import React, { PureComponent } from 'react'
import './navbar.scss';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="top-nav">
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