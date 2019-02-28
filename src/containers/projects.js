import { connect } from 'react-redux'
import Operations from '../components/content/operations'

import {
  getProjects,
  onNextPage,
  onPrevPage,
  onProjectSearch
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
    onNextPage: () => dispatch(onNextPage()),
    onPrevPage: () => dispatch(onPrevPage()),
    onSearch: (query) => dispatch(onProjectSearch(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations.Projects)
