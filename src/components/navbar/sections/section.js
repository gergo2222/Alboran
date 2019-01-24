import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Section extends Component {
  constructor(props) {
    super(props)

    this.sectionSelected = this.sectionSelected.bind(this)
  }

  sectionSelected() {
    this.props.onSectionSelected(this.props.section.id)
  }

  renderItem = () => {
    const { section } = this.props
    return (
      <Link to={section.defaultItemUrl}>
        <div className={`section ${section.icon}`} onClick={this.sectionSelected} />
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
      <div>
        {isDummy ? this.renderItem() : this.renderSeparator()}
      </div>
    )
  }
}
