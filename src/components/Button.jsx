import React from 'react'

const Button = ({ text, as: Component = 'button', ...rest}) => {
    
  return (
   <div><Component {...rest}><button className='btn'>{text}</button></Component> </div>
  )
}

export default Button