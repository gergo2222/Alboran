import React from 'react'
import { MenuItem } from './menuItem.js'
import { Header } from './header.js'

import './menu.css'

export const Menu = ({items, header, onMenuItemChange, activeItem}) => {
  return (
    <div id="menu">
      <Header title={header}/>
      {items.map((item, i) =>
        <MenuItem item={item} key={i} onMenuItemChange={onMenuItemChange} activeItem={activeItem}/>)}
    </div>)
}