export function selectSection(section) {
  return {
    type: 'SELECT_SECTION',
    selectedSection: section
  }
}

export function getNavbarStructure() {
  return {
    type: 'GET_NAVBAR_STRUCTURE'
  }
}