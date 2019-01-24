import React from 'react'

import { Section } from './section'
import './section.css'

export const Sections = ({sections, onSectionSelected, activeSection}) => {
  return (
    <div id="sections-wrapper">
      <div className="section logo" />
      <div className="separator" />
      {sections.map((section, i) =>
        <Section key={i} section={section} onSectionSelected={onSectionSelected} active={activeSection} />)}
    </div>
  )
}
