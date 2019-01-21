import { connect } from 'react-redux'
import { NavBar } from '../components/navbar'
import {
  navbarStructureReceived,
  sectionSelected
} from '../redux/navbar/actions'

const mapStateToProps = state => {
  return {
    navigation: state.navbar.navigation,
    activeSection: state.navbar.activeSection
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNavBarStructure: () => dispatch(navbarStructureReceived()),
    sectionSelected: (section) => dispatch(sectionSelected(section))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
