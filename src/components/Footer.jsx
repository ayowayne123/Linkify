import React from 'react'
import Zuri from '../Zuri.Internship_Logo.png'
import Ingress from '../I4G.png'

function Footer() {
  return (
    <div className='Last_footer'>
        <div> 
            <img className="profile" src={Zuri} alt="Zuri Internship"   />
        </div>
        <div> HNG Internsip 9 Frontend Task</div>
        <div> 
            <img className="profile" src={Ingress} alt="Zuri Internship"   />
        </div>
    </div>
  )
}

export default Footer