import React, { Component } from 'react'
import { Button, Pagination } from '../../common'
import { Select } from '../../select'

import './operations.css'
import './styles/projects.css'

export class Projects extends Component {
  componentDidMount() {
    this.props.getProjects(this.props.pagination)
  }

  onNextPageClick = () => {
    this.props.onNextPage()
    this.props.getProjects(this.props.pagination)
  }

  onPrevPageClick = () => {
    this.props.onPrevPage()
    this.props.getProjects(this.props.pagination)
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
    const { pagination } = this.props
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
        <Pagination
          total={pagination.totalRecords}
          perPage={pagination.recordsOnPage}
          currentPage={pagination.page}
          onNext={this.onNextPageClick}
          onPrev={this.onPrevPageClick}/>
      </div>
    )
  }
}
