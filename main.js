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
    if(document.querySelectorAll('.options')){
        document.querySelectorAll('.options').forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                document.querySelectorAll('.options_underline').forEach((under,i)=>{
                   i===index ? under.style.width='110%' : under.style.width='0%' ;
                })
                gsap.to(window,{duration:1,scrollTo:{y: "#section"+(index+1), offsetY: 0}})
            })
        });
    }
    if(document.querySelectorAll('.res_options')){
        document.querySelectorAll('.res_options').forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                document.querySelectorAll('.options_underline').forEach((under,i)=>{
                    i===index ? under.style.width='110%' : under.style.width='0%' ;
                })
                gsap.to(window,{duration:1,scrollTo:{y: "#section"+(index+1), offsetY: 0}})
            })
        })
    }
    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }
    // nav bar setting
    function onVisibilityChange(el, callback) {
        var old_visible;
        return function () {
            el.forEach((ele,index)=>{
                if(elementInViewport2(ele)){
                    var visible = index;
                    if (visible != old_visible && old_visible!==undefined ) {
                        if (typeof callback == 'function') {
                            callback(visible,old_visible);
                            old_visible = visible;
                        }
                    }else{
                        if(old_visible===undefined){
                            console.log('here its is');
                            const underlines = document.querySelectorAll('.options_underline');
                            const resposive_underline = document.querySelectorAll('.res_options');
                            if(underlines){
                                underlines[visible].style.width = '110%';
                            }
                            if(resposive_underline){
                                resposive_underline[visible].classList.add('nav_active');
                            }
                            old_visible = visible;
                        }
                    }
                } 
            });
        }
    }
    const isActive = document.querySelectorAll('.is_active');
    var handler = onVisibilityChange(isActive, function(visible,old_visible) {
        old_visible = old_visible || 0;
        const underlines = document.querySelectorAll('.options_underline');
        const resposive_underline = document.querySelectorAll('.res_options');
        if(underlines){
            underlines[visible].style.width = '110%';
            underlines[old_visible].style.width = '0%';            
        }
        if(resposive_underline){
            resposive_underline[visible].classList.add('nav_active');
            resposive_underline[old_visible].classList.remove('nav_active');
        }
    });
    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', handler, false);
        addEventListener('load', handler, false);
        addEventListener('scroll', handler, false);
        addEventListener('resize', handler, false);
        handler();
    } else if (window.attachEvent)  {
        attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
        attachEvent('onload', handler);
        attachEvent('onscroll', handler);
        attachEvent('onresize', handler);
        handler();
    }



    // Glider ------------------------------------------------------
    new Glide(".glide",{type:"carousel",startAt:0,perView:3,gap:50,breakpoints:{1200:{perView:3,peek:{before:0,after:80}},1100:{perView:3,peek:{before:0,after:0}},1000:{perView:3,peek:{before:0,after:0}},900:{perView:2,peek:{before:0,after:150}},800:{perView:2,peek:{before:0,after:80}},700:{perView:2,peek:{before:0,after:20}},600:{perView:1,peek:{before:0,after:180}},500:{perView:2,peek:{before:0,after:0}},400:{perView:1,peek:{before:0,after:100}},300:{perView:1,peek:{before:0,after:0}}},peek:{before:0,after:170}}).mount(),new Glide(".glide1",{type:"carousel",startAt:0,perView:3,gap:50,breakpoints:{1200:{perView:3,peek:{before:0,after:80}},1100:{perView:3,peek:{before:0,after:0}},1000:{perView:3,peek:{before:0,after:0}},900:{perView:2,peek:{before:0,after:150}},800:{perView:2,peek:{before:0,after:80}},700:{perView:2,peek:{before:0,after:20}},600:{perView:1,peek:{before:0,after:180}},500:{perView:2,peek:{before:0,after:0}},400:{perView:1,peek:{before:0,after:100}},300:{perView:1,peek:{before:0,after:0}}},peek:{before:0,after:170}}).mount();
}





// header Animation
