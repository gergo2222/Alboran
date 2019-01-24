import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Section extends Component {
  constructor(props) {
    super(props)

    this.sectionSelected = this.sectionSelected.bind(this)
  }

  sectionSelected() {
    this.props.onSectionSelected(this.props.section)
  }

  renderItem = () => {
    const { section, active } = this.props
    return (
      <Link to={section.defaultItemUrl}>
        <div className={`${section.icon}`} onClick={this.sectionSelected}>
          <div className={`section ${active === section.id ? 'active' : ''}`} >
          </div>
        </div>
      </Link>
    )
  }

  renderSeparator = () => {
    return (
      <div className="separator"></div>
    )
  }

  render() {
    const isDummy = this.props.section.id !== undefined
    return (
        isDummy ? this.renderItem() : this.renderSeparator()
    )
  }
}
