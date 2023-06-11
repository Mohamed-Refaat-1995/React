import React from "react";
import MyProgress from "./MyProgress";

class SkillsSection extends React.Component {
    constructor(){
        super()
    }
    render(){

        return(
           <div className='text-white' style={{height:'600px', backgroundColor:'black', padding:'6em'}}>
            <h1>Skills</h1>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, non ea quibusdam officia necessitatibus anim
                i a ipsum illum nobis vero at odio totam ducimus voluptate sed error eos commodi porro.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, 
                non ea quibusdam officia necessitatibus animi a ipsum illum nobis vero at odio totam ducimus 
                voluptate sed error.
                <div className="d-flex" style={{marginTop:'2rem', padding:'1em'}}>
                    <div className="col-6" style={{marginTop:'3rem'}}>
                        <ul style={{listStyle:"none"}}>
                            <li>UI/UX Design</li>
                            <li>Responsive Design</li>
                            <li>Web Design</li>
                            <li>Mobile App Design</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <MyProgress className="bg-danger" title="90" TitleText="HTML"/>
                        {/* <MyProgress className="bg-danger" title="90" TitleText="CSS"/> */}
                        <MyProgress title="80" TitleText="JavaScript"/>
                        {/* <MyProgress title="80" TitleText="React"/> */}
                        <MyProgress className="bg-danger" title="90" TitleText="Bootstrap"/>
                        <MyProgress title="80" TitleText="Node JS"/>
                        <MyProgress title="60" TitleText="WebAPI"/>
                        <MyProgress title="50" TitleText="WordPress"/>
                    </div>
                </div>
           </div>

        )
    }
}
export default SkillsSection;