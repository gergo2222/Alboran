import React, { Component } from 'react'

import { Section } from './section'
import './section.css'

export class Sections extends Component {
  render() {
    const { sections } = this.props
    return (
      <div id="sections-wrapper">
        {sections.map((area, i) => (<Section key={i} label={area} onSectionSelected={this.props.onSectionSelected} />))}
      </div>
    )
  }
}
