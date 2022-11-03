import React from 'react'

function Contact() {
  return (
    <div className='contact-form'>
        <span> 
        <span> Contact Me</span>
        <span> Hi there, contact me to ask me about anything you have in mind.</span>
        </span>
        <form className='main-form'>
  <label>
    First Name
    <input type="text" id='first_name' name="fname" placeholder='Enter your first name'/>
  </label>
  <label>
    Last Name
    <input type="text" id='last_name' name="lname" placeholder='Enter your Last name'/>
  </label>
  <label>
    Last Name
    <input type="email" id='email' name="email" placeholder='yourname@gmail.com'/>
  </label>
  <label>
   Message
    <textarea id='message' name='message' placeholder="Send me a message and I'll reply as soon as possible ..."  rows={5}/>
    </label>
  <input type="submit" value="Submit" />
</form>
        
    </div>
  )
}

export default Contact