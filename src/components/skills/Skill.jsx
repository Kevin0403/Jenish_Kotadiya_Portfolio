import React from 'react'
import './Skill.css'

function Skill({image, name, size, fontSize = '0.8rem'}) {
  return (
    <div className="hover" style={{width : size} }>
<img src={image} width={size || 50}/>
    <div className="appear">
       <p style={{fontSize : fontSize}}>{name}</p>
    </div>
</div>
  )
}

export default Skill