import React from 'react'
import { MenuItem } from './menuItem.js'
import { Header } from './header.js'

import './menu.css'

export const Menu = ({section}) => {
  return (
    <div id="menu">
      <Header title={section.label}/>
      {section.menu.map((item, i) => <MenuItem key={i} label={item} />)}
    </div>)
}