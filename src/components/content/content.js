import React from 'react'
import { Route } from 'react-router-dom'
import './content.css'

export const Content = () => {
  return (
    <div id="content">
      <Route path="/Home" component={Home}/>
      <Route path="/Sales"/>
      <Route path="/Operations"/>
    </div>
  )
}

const Home = ({ match }) => {
  console.log(match)
  return (
      <div>Hi</div>
  )
}

