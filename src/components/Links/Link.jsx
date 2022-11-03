import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import Slack from "../../../src/slack.svg";

function Link() {
  return (
    <div className='Link'>
      <a href="https://training.zuri.team" className='btn' id='btn__zuri' >
        <div className='text'> Zuri Team
         </div> </a> 
      <a href="https://books.zuri.team"  id='books' className='btn'>
        <div className='text'> <span>Zuri Books </span>
        <span className='subtext'> Find Books about Design and Coding </span> </div> </a> 

         <a href="https://books.zuri.team/python-for-beginners?ref_id=ayomidewayne" className='btn' id='book__python'>
        <div className='text'> <span>Python Books </span>
      <span className='subtext'> Buy Ayomide's Book on Python </span> </div> </a> 

         <a href="https://background.zuri.team" className='btn' id='pitch' >
        <div className='text'> <span>Background Check for Coders</span>
      <span className='subtext'>Find out more information about your developers </span> </div>  </a> 

         <a href="https://books.zuri.team/design-rules" className='btn' id='book__design' >
        <div className='text'> <span>Design Books</span>
      <span className='subtext'>Get a Free Design for your book, courtesy Zuri </span> </div> </a>  

      <a href="/contact" className='btn' id='contact' >
        <div className='text'> <span>Contact Me</span>
      <span className='subtext'>Get in touch with me </span> </div> </a>  

        <span className='bio'> 
           <a href="https://slack.com"> <img src={Slack} alt='slack' /></a> 
           <a href="https://github.com/ayowayne123"> <AiFillGithub/></a> 
           </span>
       
    </div>
  )
}

export default Link