import React from 'react'
import '../css/Section_1.css'
function Section() {
    return (
        <div className="section_1" id='section1'>
        <div className='wall_background'>
          <div className='hero_image' alt="hero_image"/>
          <div className='hero_circle' alt='hero_circle'></div>
          <div className='left_circle' alt='hero_circle'></div>
          <div className='centre_circle' alt='hero_circle'></div>
        </div>
        <div className='introduction is_active'>
          <h1 className='text_primary'><span className='text_span_1'></span> <br/> <span className='text_span_2 anime1'>Gagan Deogun</span></h1>
          <h2 className='text_secondry anime2'>Welcome to my Space on the Internet</h2>
          <p className='text_third anime2'>I am a passionate Full-stack Web Developer & Graphic Designer
           living in the beautiful city Patiala. Currently, I pursuing Degree in CE at 
           Punjabi University, Patiala. <br/>
          </p>
          <button className='primary_button anime2' id='learn' >Learn more</button>
        </div>
      </div>
    )
}

export default Section
