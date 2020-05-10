import React, { PureComponent } from 'react'
import "./sidebar.scss";

class Sidebar extends PureComponent {
    render() {
        return (
            <div className="sidebar">
                <a href="#menu">Menu</a>
                <a href="#category">Category</a>
                <a href="#product">Product</a>
                <a href="#brand">Brand</a>
            </div>
        )
    }
}


export default Sidebar;