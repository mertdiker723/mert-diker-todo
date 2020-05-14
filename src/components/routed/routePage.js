import React, { Component } from 'react'
import "./route.scss";
import { loadTodoAction } from "../../action/todoAction";
import { connect } from 'react-redux';


class RoutePage extends Component {

    componentDidMount() { 
        console.log(this.props.allValues.todoReducer)
    }

    render() {
        return (
            <div className="body-route">
                <button className="body-route__back" onClick={() => this.props.history.push(`/`)}>Geri Dön</button>
                <p className="body-route__paragraph">ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allValues: state
    }
}

const mapDispatchToProps = {
    onCallTodo: loadTodoAction
}


export default connect(mapStateToProps, mapDispatchToProps)(RoutePage);