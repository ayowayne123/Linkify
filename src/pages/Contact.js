import React from 'react'

function Contact() {
  return (
    <div className='contact-form'>
    <span className='contact-me'> 
        <span className='top'> Contact Me</span>
        <span className='top-little'> Hi there, contact me to ask me about anything you have in mind.</span>
    </span>
    <form className='main-form' >
        <label className='half'  >
        <span class="label-text">First Name</span>
            <input type="text" id='first_name' name="fname" placeholder='Enter your first name'  required/>
        </label>
        <label className='half'>
        <span class="label-text">Last Name</span>
            <input type="text" id='last_name' name="lname" placeholder='Enter your Last name' required f/>
        </label>
        <label>
        <span class="label-text">Email</span>
            <input type="email" id='email' name="email" placeholder='yourname@gmail.com' required/>
        </label>
        <label>
        <span class="label-text">Message</span>
            <textarea id='message' name='message' placeholder="Send me a message and I'll reply as soon as possible ..."  rows={5} required/>
            </label>
        <input type="submit" className='submit' id='btn__submit' value="Send Message" />
    </form>
        
    </div>
  )
}

export default Contact