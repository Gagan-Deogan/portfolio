import React,{useEffect} from 'react'
import '../css/Section_1.css'
import { gsap, Draggable, MotionPathPlugin,ScrollToPlugin} from "gsap/all";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/all";


function Section() {
  const myAnimation=()=>{
    gsap.registerPlugin(CSSRulePlugin,ScrollTrigger,ScrollToPlugin);
    const rule1 = CSSRulePlugin.getRule('.text_span_1::before');
    const rule2 = CSSRulePlugin.getRule('.text_span_1::after');
    const t1 = gsap.timeline({defaults:{duration:1}});
    t1.from('.hero_circle',{scale:'6', duration:1, ease:'Power2.easeInOut'})
      .from(rule1,{cssRule:{scaleX:0},duration:.6},)
      .to(rule1,{cssRule:{scaleY:0},duration:.6,delay:.1},)
      .from(rule2,{cssRule:{opacity:0,duration:0.5}},'-=1')
      .from('.anime1',{opacity:0,duration:0.3,y:50})
      .from('.hero_image',{opacity:0,duration:0.3})
      .from('.anime2',{opacity:0,duration:1,x:50,stagger:0.3})
      .from('.anime3',{opacity:0,duration:1,y:-50})
    document.getElementById('learn').addEventListener('click',()=>{
      gsap.to(window,{duration:'500ms',scrollTo:{y:'#section2'}, offsetY:0})
    });
  }

  useEffect(() => {
    myAnimation();
  }, []);

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
          <button className='primary_button anime2' id='learn' color='' >Learn more</button>
        </div>
      </div>
    )
}

export default Section
