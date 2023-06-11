import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import SkillsSection from "./SkillsSection";
import Cards from "./Cards";
import "./CardStyle.css";
import Footer from "./Footer";

class MyPortfolio extends React.Component{

    constructor(){
        super()
    }
    render(){
        return(
            <>
            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <div style={{marginTop:'2rem', marginBottom:'2rem'}}>
                <h2 style={{fontWeight:'bold'}}>Portfolio</h2>
            <div class="card-group " id="card-group1">
            <Cards color='rgba(0,0,0,0.7)' title="Web Design"/>
            <Cards color='rgba(0,0,0,0.3)' title="Mobile Design"/>
            <Cards color='rgba(0,0,0,0.7)' title="Logo Design"/>
            </div>

            <div class="card-group" id="card-group1">
            <Cards color='rgba(0,0,0,0.3)' title="UI/UX Design"/>
            <Cards color='rgba(0,0,0,0.7)' title="Mobile App Design"/>
            <Cards color='rgba(0,0,0,0.3)' title="Web Application"/>
            </div>
            </div>
            <Footer/>
            </> 
        )
    }
}

export default MyPortfolio;