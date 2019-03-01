import React, { Component } from 'react'
import { Table } from '../../common'


export class Leads extends Component {
  componentDidMount() {
    this.props.getLeads()
  }

  render() {
    const tableStructure = {
      header: {
        columns: [
          { title: "Project Type", id: "type" },
          { title: "ID", id: "id" },
          { title: "Status", id: "status" },
          { title: "State", id: "state" },
          { title: "Company Name", id: "companyName" },
          { title: "Office", id: "office" },
          { title: "Callback Date", id: "callback" },
          { title: "Assigned To", id: "assignedTo" },
        ]
      },
      body: {
        items: this.props.leads
      }
    }

    return (
      <div>
        <Table
          caption="Leads"
          structure={tableStructure}
          pagination={this.props.pagination} onNext={this.props.nextPage} onPrev={this.props.prevPage} onSearch={this.props.onSearch} />
      </div>
    )
  }
}
