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
        <Sections onSectionSelected={this.props.sectionSelected} />
        <Menu items={this.props.menu} />
      </div>
    )
  }
}
