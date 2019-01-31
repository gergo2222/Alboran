import { connect } from 'react-redux'
import Operations from '../components/content/operations'

import {
  getProjects
} from '../redux/projects/actions'

const mapStateToProps = ({ projects }) => {
  console.log('mapstatetoprops', projects)
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations.Projects)
