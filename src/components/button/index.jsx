import { Component } from "react"
import './style.css'

class CustomButton extends Component {
    render (){
        return(
            <button className="custom-btn" onClick={ this.props.handleClick }>
                { this.props.children }
            </button>
        )
    }
}

export default CustomButton