import React from 'react'
import '../css/Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer_logo"></div>
            <div className="importantlinks">
                <div>Follow me on</div>
                <div className="dm_links">
                    <div className="dm_circle">
                        <div className="icon_image"></div>
                    </div>
                    <div className="dm_circle">
                        <div className="icon_image git"></div>
                    </div>
                    <div className="dm_circle">
                        <div className="icon_image hacker"></div>
                    </div>
                </div>
            </div>
            <div className="footer_line">Built from scratch by me</div>

        </div>
    )
}

export default Footer
