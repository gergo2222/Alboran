import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './section.css'

export class Section extends Component {
  constructor(props) {
    super(props)

    this.sectionSelected = this.sectionSelected.bind(this)
  }

  sectionSelected() {
    this.props.onSectionSelected(this.props.section.id)
  }

  renderItem = () => {
    const {section} = this.props
    return (
      <div className="section" onClick={this.sectionSelected}>
        <Link to={`/${section.route}`}>
        
          {section.label}
        </Link>
      </div>
    )
  }

  renderSeparator = () => {
    return (
      <div> --- </div>
    )
  }
  
// { id: "home", label: "Home" }
  render() {
    const {section} = this.props
    return (
      <div>
        {section.type ? this.renderSeparator() : this.renderItem()}
      </div>
    )
  }
}
