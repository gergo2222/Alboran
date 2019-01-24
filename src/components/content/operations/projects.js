import React, { Component } from 'react'

import './operations.css'

export class Projects extends Component {

  renderCreateButton() {
    return (
      <div className="button">
        <span><b>Create Project</b></span>
        <span><b>+</b></span>
      </div>
    )
  }
  renderHeader() {
    return (
      <div id="projects-header">
        <h1>Projects</h1>
        <p>View: All Projects</p>
        <input className="borderless" type="text" placeholder="Search..." />
        {this.renderCreateButton()}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    )
  }
}
