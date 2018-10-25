import React from 'react'

import './index.css'
import { Area } from './area/area'


export const Navigation = () => {
  return (
    <div id="navigation-container">
        <Area label="Home" />
        <Area label="Sales" />
        <Area label="Operations" />
    </div>
  )
}
