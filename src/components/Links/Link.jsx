import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import Slack from "../../../src/slack.svg";

function Link() {
  return (
    <div className='Link'>
      <div className='btn'> <a href="https://training.zuri.team"  id='books' >
        <div className='text'> Zuri Team
         </div> </a> </div>
      <div className='btn'> <a href="https://books.zuri.team"  id='books' >
        <div className='text'> <span>Zuri Books </span>
        <span className='subtext'> Find Books about Design and Coding </span> </div> </a> </div> 

        <div className='btn'> <a href="https://books.zuri.team/python-for-beginners?ref_id=ayomidewayne"  id='book__python'>
        <div className='text'> <span>Python Books </span>
      <span className='subtext'> Buy Ayomide's Book on Python </span> </div> </a> </div>

       <div className='btn'>  <a href="https://background.zuri.team" id='pitch' >
        <div className='text'> <span>Background Check for Coders</span>
      <span className='subtext'>Find out more information about your developers </span> </div>  </a> </div>

        <div className='btn'> <a href="https://books.zuri.team/design-rules" id='book__design' >
        <div className='text'> <span>Design Books</span>
      <span className='subtext'>Get a Free Design for your book, courtesy Zuri </span> </div> </a>  </div>

        <span className='bio'> 
           <a href="https://slack.com"> <img src={Slack} alt='slack' /></a> 
           <a href="https://github.com/ayowayne123"> <AiFillGithub/></a> 
           </span>
       
    </div>
  )
}

export default Link