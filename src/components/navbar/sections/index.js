import React, { Component } from 'react'

import { Section } from './section'
import './section.css'

export class Sections extends Component {
  render() {
    const { navigation } = this.props
    return (
      <div id="sections-wrapper">
        {Object.keys(this.props.navigation).map((section, i) =>
          <Section key={i} label={navigation[section].label} onSectionSelected={this.props.onSectionSelected} />)}
      </div>
    )
  }
}
