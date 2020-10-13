import React from 'react'
import '../css/Header.css'
function Header() {
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