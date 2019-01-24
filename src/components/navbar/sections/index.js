import React, { Component } from 'react'

import { Section } from './section'
import './section.css'

export class Sections extends Component {
  render() {
    const items = this.props.sections
    return (
      <div id="sections-wrapper">
        <div className="section logo" />
        <div className="separator" />
        {items.map((section, i) =>
          <Section key={i} section={section} onSectionSelected={this.props.onSectionSelected} />)}
      </div>
    )
  }
}
