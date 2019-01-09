import React from 'react'

import { Area } from './area'

export const Areas = ({areas}) => {
  return (
    <div>
      {areas.map((area) => (<Area label={area} />))}
    </div>
  )
}
