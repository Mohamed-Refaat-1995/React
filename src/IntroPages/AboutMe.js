
import React from "react";
import ButtonClass from "./ButtonClass";

class AboutMe extends React.Component {

    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div className="d-flex" style={{marginTop:'2rem', marginBottom:'3rem'}}>
            <div className="display-5" style={{fontWeight:'bold', color:"black", width:'-moz-available'}}>About me</div>
            <div style={{width:'auto'}} >
                <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, non ea quibusdam officia necessitatibus anim
                i a ipsum illum nobis vero at odio totam ducimus voluptate sed error eos commodi porro.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, 
                non ea quibusdam officia necessitatibus animi a ipsum illum nobis vero at odio totam ducimus 
                voluptate sed error.
                </blockquote>
                <div style={{float:"left"}}>
                <a href="./App.js" download>
                <ButtonClass className=' btn-outline-light btn-lg btn-dark' myTitle="Download Resume"/>
                    </a>
                </div>
                </div>
           </div>
            </>
          
        )
    }
}
export default AboutMe;