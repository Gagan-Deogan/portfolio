import React from 'react'
import '../css/Contact.css'
function Contact() {
    const onFormSubmit = (e)=>{
        e.preventDefault();
        const form = document.forms["submit-to-google-sheet"];
        fetch('https://script.google.com/macros/s/AKfycbwfdMx5i8RmvHUbG5XY0vgCMp-or7kY-GVkYYWyEce9eBOq9PGdrdb4/exec',{ 
            method: 'POST',
            body:new FormData(form),
        }).then((res)=>{
            if(res.status===200){
                alert('Thanks');
            }
            document.getElementById('name').value ='';
            document.getElementById('email').value ='';
            document.getElementById('message').value ='';
        }).catch((err)=>{
            alert('something went worng please try again later..')
        })
    }
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
                    <div className="dm_circle" onClick={()=>window.open('https://www.linkedin.com/in/gagandeep-singh-626299177/')}>
                        <div className="icon_image"></div>
                    </div>
                    <div className="dm_circle" onClick={()=>window.open('https://www.instagram.com/gagan_deogan/')}>
                        <div className="icon_image insta"></div>
                    </div>
                    <div className="dm_circle">
                        <a href="mailto:gs816912@gmail.com">
                            <div className="icon_image mail"></div>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="form_area contact_anime">
                <form action="" className="contact_form" name="submit-to-google-sheet" onSubmit={(e)=>{onFormSubmit(e)}}>
                    <div className='lala'>
                        <input type="text" id='name' name='name' autoComplete='off' required/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="lala">
                        <input type="email" name='email' id='email' required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="lala la">
                        <textarea  name='message' id="message" required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <input type="submit" className='primary_button'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
