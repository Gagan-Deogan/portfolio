import React,{useEffect} from 'react'
import '../css/Header.css'
import { gsap ,ScrollToPlugin,ScrollTrigger} from "gsap/all";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function Header() {
    const myAnimation=()=>{
        gsap.registerPlugin(CSSRulePlugin,ScrollTrigger,ScrollToPlugin);
        const rule3 = CSSRulePlugin.getRule('.header-nav::after');
        gsap.from(rule3,{
            scrollTrigger:{
                trigger:'.primary_button',
                start:'bottom top',
            },
            cssRule:{opacity:0,duration:1}
        });
        gsap.from('#portfolio_under',{
            scrollTrigger:{
                trigger:'.portfolio_section',
            },
            scale:'0'
        });
        gsap.from('#home_under',{
          scrollTrigger:{
              trigger:'.section_1',
          },
          scale:'0'
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
    }
    useEffect(()=>{
        myAnimation();  
    },[]);
    return (
        <div className='header-nav' id='header'>
            <div className="option_container anime3">
                <div className='options'>Home
                    <div className='options_underline' id='home_under'></div>
                </div>
                <div className='options'>Portfolio
                    <div className='options_underline' id='portfolio_under'></div>
                </div>
                <div className='options'>My Skill
                    <div className='options_underline' id='skill_under'></div>
                </div>
                <div className='options'>Contact
                    <div className='options_underline' id='contact_under'></div>
                </div>
            </div>
            <div className="option_container_responsive">
                <div className='icon_options_home res_options'>Home</div>
                <div className='icon_options_portfolio res_options'>Portfolio</div>
                <div className='icon_options_skill res_options'>Skill</div>
                <div className='icon_options_contact res_options'>Contact</div>
            </div>
        </div>
    )
}

export default Header