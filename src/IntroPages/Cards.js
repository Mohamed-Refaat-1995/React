import React from "react";
import "./CardStyle.css";

class Cards extends React.Component{

    constructor(props){
        super()
    }
    render(){
        return(
        <div style={{backgroundColor:`${this.props.color}`}} className="card" >
        <div className="card-body">
             <p className="card-text text-white">{this.props.title}</p>
         </div>
        </div>
       
        )
    }
}

export default Cards;