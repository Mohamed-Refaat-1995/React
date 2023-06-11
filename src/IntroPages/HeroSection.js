import React from 'react';
import ButtonClass from './ButtonClass';

class HeroSection extends React.Component{

    constructor(){
        super()
    }
    
    render(){
      
        return(
        <>
            <div className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://media.vogue.es/photos/5cc7671934ba004ff3f23ada/master/pass/irina_para_loreal_paris_1715.jpg')", height: 400 }}>
                <div className='mask'>
                <div className='d-flex justify-content-center align-items-center h-100'
                style={{marginTop:'8rem'}}
                >
                    <div className='text-white'>
                    <h1 className='mb-3' style={{fontWeight:'bold'}}>Katie Reed</h1>
                    <h4 className='mb-3'>Web Developer & Designer</h4>  
                
                    <ButtonClass myTitle="Contact Me"/>
                    </div>
                </div>
                </div>
            </div>

        </> 

        )
    }
}

export default HeroSection;