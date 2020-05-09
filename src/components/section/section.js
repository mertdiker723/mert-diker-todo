import React, { PureComponent } from 'react'
import "./section.css";

class Section extends PureComponent {

    constructor() {
        super();
        this.myRef = React.createRef();
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
        if(this.state.value.trim() !== ''){
            this.props.addTodo(this.state.value);
            this.myRef.current.value = "";
            this.setState({
                value:""
            })
        }
        else{
            alert("Alanı doldurunuz.")
        }        
    }

    render() {
        return (
            <div className="section">
                <input ref={this.myRef} onChange={this.changeValue} className="section__input" type="text" />
                <button onClick={this.clickAdd} type="submit" className="section__add">Add</button>
            </div>
        )
    }
}


export default Section;