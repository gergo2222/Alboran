import React from 'react'
import { Route } from 'react-router-dom'
import './content.css'
import { Home } from './home'
import { Sales } from './sales'
import { Operations } from './operations'

export const Content = () => {
  return (
    <div id="content">
      <Route path="/Home" component={Home}/>
      <Route path="/Sales" component={Sales}/>
      <Route path="/Operations" component={Operations}/>
    </div>
  )
}

