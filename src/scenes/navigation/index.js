import React from 'react'

import './navigation.css'
import { Areas } from './areas'
import { Menu } from './menu'

const navigation = [
  {
    label = "Home",
    menu = [
      "Home",
      "Help Desk",
      "Offices",
    ]
  },
  {
    label = "Sales",
    menu = [
      "Leads",
      "Opportunities",
      "Clients",
    ]
  },
  {
    label = "Operations",
    menu = [
      "Clients",
      "Projects",
      "Assignments",
    ]
  }
]

export const Navigation = () => {
  return (
    <div id="navigation-container">
      {navigation.map(item => {
        return (
          <div>
            <Areas />
            <Menu />
          </div>)
      })}
    </div>
  )
}
