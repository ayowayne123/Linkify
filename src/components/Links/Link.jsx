import React from 'react'
import Button from './Button';
import { AiFillGithub } from "react-icons/ai";
import Slack from "../../../src/slack.svg";

function Link() {
  return (
    <div className='Link'>
        <Button  btn_Id="btn__zuri"  as="a" href="https://training.zuri.team" text="Zuri Team" />
        <Button  btn_Id="books" as="a" href="https://books.zuri.team"  text="Zuri Books" subtext="Find Books about Design and Coding"/>
        <Button  btn_Id="book__python" as="a" href=" https://books.zuri.team/python-for-beginners?ref_id=ayomidewayne"  text="Python Books"  subtext="Buy Ayomide's Book on Python"/>
        <Button btn_Id="pitch" as="a" href="https://background.zuri.team" text="Background Check for Coders" subtext="Find out more information about your developers"/>
        <Button btn_Id="book__design" as="a" href="https://books.zuri.team/design-rules" text="Design Books" subtext="Get a Free Design for your book, courtesy Zuri"/>
        <span className='bio'> 
           <a href="https://slack.com"> <img src={Slack} alt='slack' /></a> 
           <a href="https://github.com/ayowayne123"> <AiFillGithub/></a> 
           </span>
       
    </div>
  )
}

export default Link