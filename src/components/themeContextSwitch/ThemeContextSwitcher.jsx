import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {toggleTheme} from '../../store/ThemeSlice'
import './index.css'

function ThemeContextSwitcher({size=1}) {

  
  
  const dispatch = useDispatch()
    const switchContext = () => {
        dispatch(toggleTheme())
    }


    const switchProperties = {
      '--switch-width': 60*size+'px',
      '--switch-height': 32*size+'px',
      '--circle-diameter': 30*size+'px'
    }


  return (
    <label className="ui-switch" style={switchProperties} >
  <input type="checkbox" onClick={switchContext} defaultChecked="True"/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>

  )
}

export default ThemeContextSwitcher