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
    getLeads: () => dispatch({ type: sagaActions.LEADS_REQUESTED }),
    nextPage: () => dispatch({ type: sagaActions.LEADS_NEXT_PAGE }),
    prevPage: () => dispatch({ type: sagaActions.LEADS_PREV_PAGE }),
    onSearch: ({ target: { value: filter }}) => dispatch({ type: sagaActions.LEADS_SEARCH, filter })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales.Leads)
