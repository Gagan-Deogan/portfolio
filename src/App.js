import React from 'react';
import Header from './components/Header';
import './css/App.css';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './css/fonts.css';
import { gsap,ScrollToPlugin} from "gsap/all";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/all";
function myAnimation(){
  gsap.registerPlugin(CSSRulePlugin,ScrollTrigger,ScrollToPlugin);
  const t1 = gsap.timeline({defaults:{duration:1}});
  const t2 =gsap.timeline({
      scrollTrigger:{
          trigger:'.portfolio_section'
      },
  });
  const t3 = gsap.timeline({
      scrollTrigger:{
          trigger:'.skills_section'
      },
  });
  const t4 = gsap.timeline({
      scrollTrigger:{
          trigger:'.contact_section'
      },
  });
  const rule1 = CSSRulePlugin.getRule('.text_span_1::before');
  const rule2 = CSSRulePlugin.getRule('.text_span_1::after');
  const rule3 = CSSRulePlugin.getRule('.header-nav::after');
  const header_timeline = gsap.timeline({defaults:{duration:1}});

  t1.from('.hero_circle',{scale:'6', duration:1, ease:'Power2.easeInOut'})
  .from(rule1,{cssRule:{scaleX:0},duration:.6},)
  .to(rule1,{cssRule:{scaleY:0},duration:.6,delay:.1},)
  .from(rule2,{cssRule:{opacity:0,duration:0.5}},'-=1')
  .from('.anime1',{opacity:0,duration:0.3,y:50})
  .from('.hero_image',{opacity:0,duration:0.3})
  .from('.anime2',{opacity:0,duration:1,x:50,stagger:0.3})
  .from('.anime3',{opacity:0,duration:1,y:-50})

  // portfolio section
  t2.from('.title',{y:50,opacity:0,duration:0.8})
    .from('.project_container',{scale:0,opacity:0,duration:0.7})
    .from('.project_img',{scaleY:0,opacity:0,duration:0.8})
    .from('.project_anime',{opacity:0,duration:0.5},'-=.5');
  
  // skill section
  t3.from('.soft_anime',{x:50,opacity:0,duration:1.5});
  
  //contact section
  t4.from('.contact_anime',{y:150,opacity:0,duration:1.5})


  gsap.from(rule3,{
      scrollTrigger:{
          trigger:'.primary_button',
          start:'bottom top',
      },
      cssRule:{opacity:0,duration:1}
  });
  // header timeline
  gsap.from('#home_under',{
      scrollTrigger:{
          trigger:'.section_1',
      },
      scale:'0'
  });
  gsap.from('#portfolio_under',{
      scrollTrigger:{
          trigger:'.portfolio_section',
      },
      scale:'0'
  });

  document.getElementById('learn').addEventListener('click',()=>{
      gsap.to(window,{duration:'500ms',scrollTo:{y:'#section2'}, offsetY:0})
  });

  if(document.querySelectorAll('.options')){
      document.querySelectorAll('.options').forEach((btn,index)=>{
          btn.addEventListener('click',()=>{
              document.querySelectorAll('.options_underline').forEach((under,i)=>{
                 i===index ? under.style.width='110%' : under.style.width='0%' ;
              })
              gsap.to(window,{duration:'500ms',scrollTo:{y: "#section"+(index+1), offsetY: 0}})
          })
      });
  }
  if(document.querySelectorAll('.res_options')){
      document.querySelectorAll('.res_options').forEach((btn,index)=>{
          btn.addEventListener('click',()=>{
              document.querySelectorAll('.options_underline').forEach((under,i)=>{
                  i===index ? under.style.width='110%' : under.style.width='0%' ;
              })
              gsap.to(window,{duration:'500ms',scrollTo:{y: "#section"+(index+1), offsetY: 0}})
          })
      })
  }
  // Glider ------------------------------------------------------
}





// header Animation



function App() {
  return (
    <div>
      <div className="logo_contanier"></div>
      <Header></Header>
      <Section></Section>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
