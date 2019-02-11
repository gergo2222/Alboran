import React from 'react'

import './styles.css'

export const Pagination = ({total, perPage, currentPage, onNext, onPrev}) => {
  const fromNumber = (currentPage - 1) * perPage + 1
  const toNumber = currentPage * perPage > total ? total : currentPage * perPage
  return (
    <div className="table-pagination">
      <span className="clickable" onClick={onPrev}>{'<'}</span>
      <span className="clickable" onClick={onNext}>{'>'}</span>
      <span>{`${fromNumber} - ${toNumber} of ${total}`}</span>
      <span>{`Show: ${perPage}`}</span>
    </div>
  )
}