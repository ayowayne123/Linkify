import React from 'react'
import '../App.css';
import profile from '../Ayomide_profile.jpeg'
import { AiFillTwitterCircle,AiFillSlackCircle } from "react-icons/ai";

function Profile() {
  return (
    <div>
        <img className="profile" src={profile} alt="Profile of Ayomide" width="88" height="88" />
        <div className="profile_name">Ayomide Ogu</div>
        <div className='icons'>
          <span className='twitter' id='twitter'>
           <AiFillTwitterCircle/>  </span><span > @ayomide_wayne </span>
          <span className='slack'> <AiFillSlackCircle/></span>
           </div>

    </div>
  )
}

export default Profile