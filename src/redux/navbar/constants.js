export const actionTypes = {
  GET_NAVBAR_STRUCTURE_REQUESTED: 'GET_NAVBAR_STRUCTURE_REQUESTED',
  GET_NAVBAR_STRUCTURE_COMPLETED: 'GET_NAVBAR_STRUCTURE_COMPLETED',
  SECTION_CHANGED: 'SECTION_CHANGED'
}

export const sectionLayout = [
  { id: 'home', label: 'Home', defaultItemUrl: '/home', icon: 'home'},
  { id: undefined },
  { id: 'sales', label: 'Sales', defaultItemUrl: '/leads', icon: 'sales' },
  { id: 'operations', label: 'Operations', defaultItemUrl: '/invoices', icon: 'operations' },
]

export const menuLayout = {
  home: [
    { id: 'home', label: 'Home', url: '/home' },
    { id: 'helpdesk', label: 'Help Desk', url: '/helpdesk'},
    { id: 'offices', label: 'Offices', url: '/offices'},
    { id: 'countries', label: 'Countries', url: '/countries'},
    { id: 'currencies', label: 'Currencies', url: '/currencies'},
    { id: 'userdirectory', label: 'User Directory', url: '/userdirectory'},
    { id: 'releasenotes', label: 'Release Notes', url: '/releasenotes'},
  ],
  sales: [
    { id: 'leads', label: 'Leads', url: '/leads'},
    { id: 'importleads', label: 'Import Leads', url: '/importleads'},
    { id: 'opportunities', label: 'Opportunities', url: '/opportunities'},
    { id: 'clients', label: 'Clients', url: '/clients'},
    { id: 'contacts', label: 'Contacts', url: '/contacts'},
    { id: 'worklist', label: 'Worklist', url: '/worklist'},
  ],
  operations: [
    { id: 'clients', label: 'Clients', url: '/clients'},
    { id: 'projects', label: 'Projects', url: '/projects'},
    { id: 'assignments', label: 'Assignments', url: '/assignments'},
    { id: 'openassignments', label: 'Open Assignments', url: '/openassignments'},
    { id: 'evaluators', label: 'Evaluators', url: '/evaluators'},
    { id: 'invoices', label: 'Invoices', url: '/invoices'},
    { id: 'creditmemos', label: 'Clients', url: '/clients'},
    { id: 'evaluatorpayments', label: 'Evaluator Payments', url: '/evaluatorpayments'},
    { id: 'paymentexports', label: 'Payment Exports', url: '/paymentexports'},
    { id: 'iob', label: 'IOB', url: '/iob'},
    { id: 'reports', label: 'Reports', url: '/reports'},
  ]
}
