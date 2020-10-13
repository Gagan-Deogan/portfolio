import React from 'react'
import '../css/Contact.css'
function Contact() {
    return (
        <div className='contact_section is_active' id='section4'>
            <div className="contact_text_area contact_anime">
                <div className="title">
                    Lets get in touch !
                </div>
                <div className="para">
                I enjoy creating effortless user experience and 
                designing delightful digital products.
                </div>
                <div className="para">
                I'm currently Available for any website Built or
                position of Full stack web developer.
                </div>
                <div className="para">
                For any Query just fill this form or drop a 
                message at below links 
                </div>
                <div className="dm_links">
                    <div className="dm_circle">
                        <div className="icon_image"></div>
                    </div>
                    <div className="dm_circle">
                        <div className="icon_image insta"></div>
                    </div>
                    <div className="dm_circle">
                        <div className="icon_image mail"></div>
                    </div>
                </div>
                
            </div>
            <div className="form_area contact_anime">
                <form action="" className="contact_form">
                    <div className='lala'>
                        <input type="text" id='name' autoComplete='off' required/>
                        <label htmlFor="name" >Name</label>
                    </div>
                    <div className="lala">
                        <input type="email" name='email' id='email' required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="lala la">
                        <textarea  name='message' id="" required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <input type="submit" className='primary_button'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
