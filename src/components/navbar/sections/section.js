import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './section.css'

export class Section extends Component {
  constructor(props) {
    super(props)

    this.sectionSelected = this.sectionSelected.bind(this)
  }

  sectionSelected() {
    this.props.onSectionSelected(this.props.label)
  }

  render() {
    const {label} = this.props
    return (
      <div className="section" onClick={this.sectionSelected}>
        <Link to={`/${label}`}>
          {label}
        </Link>
      </div>
    )
  }
}
