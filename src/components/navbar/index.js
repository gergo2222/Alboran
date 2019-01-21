import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'

export class NavBar extends Component {
  componentDidMount() {
    this.props.getNavBarStructure()
  }

  render() {
    const activeSection = this.props.navigation[this.props.activeSection]
    return (
      <div id="navbar-container">
        <Sections navigation={this.props.navigation} onSectionSelected={this.props.sectionSelected} />
        <Menu section={activeSection} />
      </div>
    )
  }
}
