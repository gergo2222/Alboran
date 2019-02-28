import React, { Component } from 'react'
import { Table } from '../../common'

export class Leads extends Component {

  onNextPageClick() {

  }

  onPrevPageClick() {
    
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
        items: [
          { type: "Industry", id: 14, status: "Open", state: "Open", companyName: undefined, office: "Belgium", callback: "2019-01-01", assignedTo: "John Wick" },
          { type: "Industry", id: 14, status: "Open", state: "Open", companyName: undefined, office: "Belgium", callback: "2019-01-01", assignedTo: "John Wick" },
          { type: "Industry", id: 14, status: "Open", state: "Open", companyName: undefined, office: "Belgium", callback: "2019-01-01", assignedTo: "John Wick" },
          { type: "Industry", id: 14, status: "Open", state: "Open", companyName: undefined, office: "Belgium", callback: "2019-01-01", assignedTo: "John Wick" },
        ]
      }
    }
  
    const pagination = {
      page: 1,
      totalPages: 1,
      totalRecords: 0,
      recordsOnPage: 20,
      filter: undefined,
      onNextPageClick: this.onNextPageClick,
      onPrevPageClick: this.onPrevPageClick
    }
  
    return (
      <div>
        <Table caption="Leads" structure={tableStructure} pagination={pagination} />
      </div>
    )
  }
}
