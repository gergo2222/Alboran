import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'

export class NavBar extends Component {
  componentDidMount() {
    this.props.getNavBarStructure()
  }

  render() {
    const {
      activeMenu,
      activeSection,
      sectionLayout,
      sectionSelected,
      onMenuItemChange,
      activeMenuItem
    } = this.props
    const activeSectionHeader = sectionLayout.find(x => x.id === activeSection).label
    return (
      <div id="navbar-container">
        <Sections onSectionSelected={sectionSelected} sections={sectionLayout} activeSection={activeSection} />
        <Menu items={activeMenu} activeItem={activeMenuItem} header={activeSectionHeader} onMenuItemChange={onMenuItemChange} />
      </div>
    )
  }
}
