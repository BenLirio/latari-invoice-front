

import indexTemplate from '../templates/invoice/index.handlebars'
export function showInvoiceTable(invoices) {
  $('#content .main').html(indexTemplate(invoices))
}



import createInvoiceTemplate from '../templates/invoice/create.handlebars'
export function showCreateInvoiceForm() {
  $('#modal').html(createInvoiceTemplate())
}
