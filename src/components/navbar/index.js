import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'

export class NavBar extends Component {
  componentDidMount() {
    this.props.getNavBarStructure()
  }

  render() {
    return (
      <div id="navbar-container">
        <Sections sections={this.props.navigation.map(({label}) => label)} />
        <Menu />
      </div>
    )
  }
}
