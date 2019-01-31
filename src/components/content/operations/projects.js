import React, { Component } from 'react'
import { Button } from '../../button'
import { Select } from '../../select'

import './operations.css'

export class Projects extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    console.log('Projects: rendering')
    return (
      <div>
        <div id="projects-header">
          <h1>Projects</h1>
          <div>
            <span>View:</span>
            <Select />
          </div>
          <input className="borderless" type="text" placeholder="Search..." />
          <Button />
        </div>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Project</th>
              <th>Office</th>
              <th>Project ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Client</td>
              <td>Project</td>
              <td>Office</td>
              <td>Project ID</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>Project</td>
              <td>Office</td>
              <td>Project ID</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>Project</td>
              <td>Office</td>
              <td>Project ID</td>
            </tr>
          </tbody>
          {}
        </table>
      </div>
    )
  }
}
