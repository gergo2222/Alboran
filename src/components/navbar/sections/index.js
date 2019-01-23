import React, { Component } from 'react'

import { Section } from './section'
import './section.css'

export class Sections extends Component {

  getItems = () => {
    return [
      { id: "home", label: "Home", route: "home" },
      { type: "separator" },
      { id: "sales", label: "Sales", route: "leads" },
      { id: "operations", label: "Operations", route: "invoices" },
    ]
  }

  render() {
    const items = this.getItems()

    return (
      <div id="sections-wrapper">
        {items.map((section, i) =>
          <Section key={i} section={section} onSectionSelected={this.props.onSectionSelected} />)}
      </div>
    )
  }
}
