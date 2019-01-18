import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'

export class NavBar extends Component {
  componentDidMount() {
    this.props.getNavBarStructure()
  }

  render() {
    const activeSection = this.props.navigation.find(section => section.label === this.props.activeSection)
    return (
      <div id="navbar-container">
        <Sections sections={this.props.navigation.map(({label}) => label)} onSectionSelected={this.props.sectionSelected} />
        <Menu menuItems={activeSection ? activeSection.menu : []} />
      </div>
    )
  }
}
