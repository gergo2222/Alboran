import { connect } from 'react-redux'
import { NavBar } from '../components/navbar'
import {
  navbarStructureReceived,
  sectionSelected,
  onMenuItemChange
} from '../redux/navbar/actions'

const mapStateToProps = ({navbar}) => {
  const activeMenu = navbar.menuLayout[navbar.activeSection]
  return {
    activeMenu,
    sectionLayout: navbar.sectionLayout,
    activeSection: navbar.activeSection,
    activeMenuItem: navbar.activeMenuItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNavBarStructure: () => dispatch(navbarStructureReceived()),
    sectionSelected: (section) => dispatch(sectionSelected(section)),
    onMenuItemChange: (item) => dispatch(onMenuItemChange(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
