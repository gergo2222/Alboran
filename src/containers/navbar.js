import { connect } from 'react-redux'
import { NavBar } from '../components/navbar'
import { getNavbarStructure } from '../redux/navbar/actions'

const mapStateToProps = state => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNavBarStructure: () => dispatch(getNavbarStructure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
