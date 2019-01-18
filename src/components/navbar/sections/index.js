import React, { Component } from 'react'

import { Section } from './section'

export class Sections extends Component {
  render() {
    const { sections } = this.props
    return (
      <div>
        {sections.map((area, i) => (<Section key={i} label={area} onSectionSelected={this.props.onSectionSelected} />))}
      </div>
    )
  }
}
