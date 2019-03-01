import React from 'react'
import {
    Select,
    Button,
    Pagination
  } from '../index'

import './styles.css'

export const Table = ({caption, structure, pagination, onNext, onPrev}) => {
  const { columns } = structure.header
  const { items: data } = structure.body

  return (
    <div>
      <div id="table-control-panel">
        <h1>{caption}</h1>
        <div>
          <span>View:</span>
          <Select />
        </div>
        {/* <input className="borderless" type="text" placeholder="Search..." onChange={this.onSearch.bind(this)} /> */}
        <Button />
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              { columns.map(({title}, i) => <th key={i}>{title}</th>) }
            </tr>
          </thead>
          <tbody>
            { data.map((row) =>
              <tr>
                {/* todo: make guid be key values */}
                { Object.keys(row).map((key, i) => <td key={i}>{row[key]}</td>) }
              </tr> ) }
          </tbody>
        </table>
      </div>
      <Pagination
        total={pagination.totalRecords}
        perPage={pagination.recordsOnPage}
        currentPage={pagination.page}
        onNext={onNext}
        onPrev={onPrev}/>
    </div>
  )
}