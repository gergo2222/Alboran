import React from 'react'
import { MenuItem } from './menuItem.js'
import { Header } from './header.js'

import './menu.css'

export const Menu = ({items, header}) => {
  return (
    <div id="menu">
      <Header title={header}/>
      {items.map((item, i) => <MenuItem key={i} label={item.label} url={item.url} />)}
    </div>)
}