import { connect } from 'react-redux'
import Operations from '../components/content/operations'

import {
  getProjects
} from '../redux/projects/actions'

const mapStateToProps = ({ projects }) => {
  return {
    projects: projects.items,
    pagination: projects.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: (pagination) => dispatch(getProjects(pagination)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations.Projects)
