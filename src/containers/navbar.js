import { connect } from 'react-redux'
import { NavBar } from '../components/navbar'
import {
  navbarStructureReceived,
} from '../redux/navbar/actions'
import {
  // actionTypes,
  sagaActions
} from '../redux/navbar/constants'

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
    sectionSelected: (section) => dispatch({
      type: sagaActions.SAGA_SECTION_CHANGED,
      section: section
    }),
    onMenuItemChange: (item) => dispatch({
      type: sagaActions.SAGA_MENU_ITEM_CHANGED,
      item: item
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
