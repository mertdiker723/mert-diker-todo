import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <a href="#menu">Menu</a>
                    <a href="#category">Category</a>
                    <a href="#product">Product</a>
                    <a href="#brand">Brand</a>
                </div>
            </div>
        )
    }
}


export default Sidebar;