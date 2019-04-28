import { connect } from 'react-redux'
import Sales from '../components/content/sales'

import { sagaActions } from '../redux/leads/constants';

const mapStateToProps = ({ leads }) => {
  return {
    leads: leads.items,
    pagination: leads.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLeads: () => dispatch({ type: sagaActions.SAGA_LEADS_REQUESTED }),
    // nextPage: () => dispatch(onNextPage()),
    // prevPage: () => dispatch(onPrevPage()),
    // onSearch: (query) => dispatch(onSearch(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales.Leads)
