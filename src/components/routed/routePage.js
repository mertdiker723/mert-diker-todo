import React, { Component } from 'react'

class RoutePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div style={{ margin: "300px" }}>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default RoutePage;