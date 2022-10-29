import React from 'react'
import '../App.css';
import profile from '../Ayomide_profile.jpeg'
import { AiFillTwitterCircle,AiFillSlackCircle } from "react-icons/ai";

function Profile() {
  return (
    <div className='profile_cont'>
       <img className="profile" src={profile} alt="Profile of Ayomide" width="88" height="88" />
        <div className="profile_name">Ayomide Ogu</div>
        <div className='icons'>
        <span className='twitter' id='twitter'>
          <AiFillTwitterCircle/>  </span>  <a href="https://twitter.com/Ayomide_wayne"><span> @ayomide_wayne  </span></a>
          <span className='slack'> <AiFillSlackCircle/></span>
           </div>

    </div>
  )
}

export default Profile