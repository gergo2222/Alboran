import React from 'react'

import { Section } from './section'

export const Sections = ({sections}) => {
  return (
    <div>
      {sections.map((area, i) => (<Section key={i} label={area} />))}
    </div>
  )
}
