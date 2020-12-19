import React from 'react'
import '../css/Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer_logo"></div>
            <div className="importantlinks">
                <div>Follow me on</div>
                <div className="dm_links">
                    <div className="dm_circle" onClick={()=>window.open('https://www.linkedin.com/in/gagandeep-singh-626299177/')}>
                        <div className="icon_image"></div>
                    </div>
                    <div className="dm_circle" onClick={()=>window.open('https://github.com/GagandeepSingh0115')}>
                        <div className="icon_image git"></div>
                    </div>
                    <div className="dm_circle" onClick={()=>window.open('https://www.hackerrank.com/gs816912?hr_r=1')}>
                        <div className="icon_image hacker"></div>
                    </div>
                </div>
            </div>
            <div className="footer_line">Built from scratch by me</div>

        </div>
    )
}

export default Footer
