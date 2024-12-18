import React from 'react'
import './Button.css'

function Button({children, divClass, style, backgroundColor, ...props}) {
  return (
    <div className='button' style={divClass} >
        <button style={{ backgroundColor : backgroundColor, ...style}}  {...props}>{children}</button>
        
    </div>
  )
}

export default Button