import React from 'react'
import { Route } from 'react-router-dom'
import './content.css'
import Home from './home'
import Sales from './sales'
import Operations from './operations'

export const Content = () => {
  return (
    <div id="content">
      <Route path="/home" component={Home.Home}/>
      <Route path="/helpdesk" component={Home.HelpDesk}/>

      <Route path="/sales" component={Sales.Leads}/>
      <Route path="/invoices" component={Operations.Invoices}/>
      <Route path="/projects" component={Operations.Projects}/>
    </div>
  )
}

