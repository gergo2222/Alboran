import React from 'react'
import { MenuItem } from './menuItem.js'
import { Header } from './header.js'

import './menu.css'

export const Menu = ({items}) => {
  console.log('menu', items)
  return (
    <div id="menu">
      {/*<Header title={args.section.label}/>*/}
      {items.menu.map((item, i) => <MenuItem key={i} label={item} />)}
    </div>)
}