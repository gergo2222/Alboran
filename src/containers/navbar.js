import { connect } from 'react-redux'
import { NavBar } from '../components/navbar'
import {
  getNavbarStructure,
  sectionSelected
} from '../redux/navbar/actions'

const mapStateToProps = state => {
  return {
    navigation: state.navbar.navigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNavBarStructure: () => dispatch(getNavbarStructure()),
    sectionSelected: (section) => dispatch(sectionSelected(section))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
