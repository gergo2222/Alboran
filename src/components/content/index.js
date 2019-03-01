import React from 'react'
import { Route } from 'react-router-dom'
import './content.css'
import Home from './home'
import Leads from '../../containers/leads'
import Projects from '../../containers/projects'

export const Content = () => {
  return (
    <div id="content">
      <Route path="/home" component={Home.Home}/>
      <Route path="/helpdesk" component={Home.HelpDesk}/>

      <Route path="/leads" component={Leads}/>
      <Route path="/projects" component={Projects}/>
    </div>
  )
}

