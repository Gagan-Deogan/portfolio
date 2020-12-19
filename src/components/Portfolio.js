import React,{useEffect} from 'react';
import '../css/Portfolio.css';
import '../css/glider-cores.css';
import { gsap ,ScrollToPlugin,ScrollTrigger} from "gsap/all";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Glide from '@glidejs/glide'
function Portfolio() {
    const animation=()=>{
        gsap.registerPlugin(CSSRulePlugin,ScrollTrigger,ScrollToPlugin);
        
        const t2 =gsap.timeline({
            scrollTrigger:{
                trigger:'.portfolio_section'
            },
        });
        t2.from('.title',{y:50,opacity:0,duration:0.8})
        .from('.project_container',{scale:0,opacity:0,duration:0.7})
        .from('.project_img',{scaleY:0,opacity:0,duration:0.8})
        .from('.project_anime',{opacity:0,duration:0.5},'-=.5');
        new Glide(".glide",{type:"carousel",startAt:0,perView:3,gap:50,breakpoints:{1200:{perView:3,peek:{before:0,after:80}},1100:{perView:3,peek:{before:0,after:0}},1000:{perView:3,peek:{before:0,after:0}},900:{perView:2,peek:{before:0,after:150}},800:{perView:2,peek:{before:0,after:80}},700:{perView:2,peek:{before:0,after:20}},600:{perView:1,peek:{before:0,after:180}},500:{perView:2,peek:{before:0,after:0}},400:{perView:1,peek:{before:0,after:100}},300:{perView:1,peek:{before:0,after:0}}},peek:{before:0,after:170}}).mount();
        new Glide(".glide1",{type:"carousel",startAt:0,perView:3,gap:50,breakpoints:{1200:{perView:3,peek:{before:0,after:80}},1100:{perView:3,peek:{before:0,after:0}},1000:{perView:3,peek:{before:0,after:0}},900:{perView:2,peek:{before:0,after:150}},800:{perView:2,peek:{before:0,after:80}},700:{perView:2,peek:{before:0,after:20}},600:{perView:1,peek:{before:0,after:180}},500:{perView:2,peek:{before:0,after:0}},400:{perView:1,peek:{before:0,after:100}},300:{perView:1,peek:{before:0,after:0}}},peek:{before:0,after:170}}).mount();
    }
    useEffect(()=>{
        animation();  
    },[]);
    return (
        <div className='portfolio_section' id='section2'>
            <div className="container">
                <h1 className="title is_active">Project</h1>
                <div className="glide" style={{marginBottom:'40px'}}>
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides project_div">
                            <li className="glide__slide">
                                <div className="project_container">
                                    <div className='project_img'></div>
                                    <div className="project_title">
                                        <h3 className="project_name project_anime">Assignments</h3>
                                        <a href='https://rvkg9.csb.app/' target='_blank' rel="noopener noreferrer" className="projects_link project_anime">
                                        </a>
                                    </div>
                                    <p className="project_description project_anime">all assignments of neogcamp.</p>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project_container">
                                    <div className='project_img'></div>
                                    <div className="project_title">
                                        <h3 className="project_name project_anime">Youco</h3>
                                        <a href='https://www.youco.co.in/' target='_blank' rel="noopener noreferrer" className="projects_link project_anime">
                                        </a>
                                    </div>
                                    <p className="project_description project_anime">It is a library of all the study material that studentd need. Thus, it helps in saving a lot of time and energy that you waste in hunting for all these essentials. Now you can thrive on getting your desired grades with ease.</p>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project_container">
                                    <div className='project_img'></div>
                                    <div className="project_title">
                                        <h3 className="project_name project_anime">Carona Counter</h3>
                                        <a href='https://carona-cases-counter.netlify.app/' target='_blank' rel="noopener noreferrer" className="projects_link project_anime">
                                        </a>
                                    </div>
                                    <p className="project_description project_anime">It a simple Carona case counter for whole world</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="glide__arrows control_div" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--right next" data-glide-dir=">"></button>
                    </div>
                </div>
                

                <h1 className="title">Experinces</h1>
                <div className="glide1">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides project_div">
                            <li className="glide__slide">
                                <div className="project_container">
                                    <div className='project_img'></div>
                                    <div className="project_title">
                                        <h3 className="project_name project_anime">ITMTB</h3>
                                        <a href='https://itmtb.com/' target='_blank' rel="noopener noreferrer" className="projects_link project_anime">
                                        </a>
                                    </div>
                                    <p className="project_description project_anime">Full stack web dev at Intern at ITMTB</p>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project_container">
                                    <div className='project_img'></div>
                                    <div className="project_title">
                                        <h3 className="project_name project_anime">Youco</h3>
                                        <a href={'www.youco.co.in'} target='_blank' rel="noopener noreferrer" className="projects_link project_anime">
                                        </a>
                                    </div>
                                    <p className="project_description project_anime">It is a library of all the study material that you need. Thus, it helps in saving a lot of time and energy that you waste in hunting for all these essentials. Now you can thrive on getting your desired grades with ease.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="glide__arrows control_div" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--right next" data-glide-dir=">"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
