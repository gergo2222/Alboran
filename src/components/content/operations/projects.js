import React, { Component } from 'react'
import { Button } from '../../button'
import { Select } from '../../select'

import './operations.css'
import './styles/projects.css'

export class Projects extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  renderProjectRow({project, client, office, projectId, startOn, endOn, serviceType, manager}, i) {
    return (
      <tr key={i}>
        <td><input type="checkbox" />{project}</td>
        <td>{client}</td>
        <td>{office}</td>
        <td>{projectId}</td>
        <td>{startOn}</td>
        <td>{endOn}</td>
        <td>{serviceType}</td>
        <td>{manager}</td>
      </tr>
    )
  }

  render() {
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
        { this.props.pagination.recordsOnPage }
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Office</th>
              <th>Project ID</th>
              <th>Start On</th>
              <th>End On</th>
              <th>Service</th>
              <th>Primary PM</th>
            </tr>
          </thead>
          <tbody>
            { this.props.projects.map((item, i) => this.renderProjectRow(item, i)) }
          </tbody>
        </table>
      </div>
    )
  }
}
