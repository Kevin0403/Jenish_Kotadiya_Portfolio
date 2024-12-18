import React, { useState } from 'react'

function AgeContainer() {
    const [age, setAge] = useState(((new Date() - new Date('2003-12-06'))/(1000*60*60*24*365)).toFixed(10))

    setTimeout(() => {
            
            setAge(((new Date() - new Date('2003-09-20'))/(1000*60*60*24*365)).toFixed(10))
    }, 300)

  return (
    <div className='age-root'><p>{`${age}`}</p></div>
  )
}

export default AgeContainer