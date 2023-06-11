
import React from "react";

class ButtonClass extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return(
            <button className='btn btn-outline-light btn-lg btn-dark'> {this.props.myTitle} </button>
        )
    }
}
export default ButtonClass;