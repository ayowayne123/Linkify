import React from 'react'

const Button = ({ text,btn_Id, as: Component = 'button', ...rest}) => {
    
  return (
   <div><Component {...rest}><button id={btn_Id} className='btn'>{text}</button></Component> </div>
  )
}

export default Button