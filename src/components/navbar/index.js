import React, { Component } from 'react'

import './navbar.css'
import { Sections } from './sections'
import { Menu } from './menu'
import { getNavigationStructure } from '../../utils/api'

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navigation: []
    }
  }

  componentDidMount() {
    console.log('trying to dispatch')
    this.props.getNavBarStructure()
  }

  render() {
    return (
      <div id="navbar-container">
        <Sections sections={this.state.navigation.map(({label}) => label)} />
        <Menu />
      </div>
    )
  }
}
