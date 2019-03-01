import { connect } from 'react-redux'
import Sales from '../components/content/sales'

import {
  getLeads,
  onNextPage,
  onPrevPage,
  onSearch
} from '../redux/leads/actions'

const mapStateToProps = ({ leads }) => {
  return {
    leads: leads.items,
    pagination: leads.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLeads: () => dispatch(getLeads()),
    nextPage: () => dispatch(onNextPage()),
    prevPage: () => dispatch(onPrevPage()),
    onSearch: (query) => dispatch(onSearch(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales.Leads)
