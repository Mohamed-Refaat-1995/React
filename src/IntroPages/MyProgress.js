import React from "react";

class MyProgress extends React.Component{

    constructor(props){
        super()
    }
    render(){
        return(
          <div className="progress" style={{marginBottom:'20px'}}>
            <div className="progress-bar" role="progreebar" 
            style={{width:`${this.props.title}%`,color:"black",fontWeight:"bolder"}} 
            aria-valuemin={0} aria-valuemax={100}>
                {this.props.TitleText}
            </div>
            
          </div>

        )
    }
}

export default MyProgress;