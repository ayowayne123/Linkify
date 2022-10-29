import React from 'react'

const Button = ({ subtext,text,btn_Id, as: Component = 'button', ...rest}) => {
    
  return (
   <div><Component {...rest}><button id={btn_Id} className='btn'>
    <div className='text'> <span>{text} </span>
   <span className='subtext'>  {subtext} </span> </div></button> </Component>
  
    </div>
  )
}

export default Button