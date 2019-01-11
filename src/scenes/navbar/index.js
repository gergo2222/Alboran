import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'
import { getNavbarStructure } from '../../redux/navbar/actions'

export class NavBar extends Component {
  componentDidMount() {
    console.log('mounted')
  }

  render() {
    const navigation = []
    return (
      <div id="navbar-container">
        <Sections sections={navigation.map(({label}) => label)} />
        <Menu />
      </div>
    )
  }
}
