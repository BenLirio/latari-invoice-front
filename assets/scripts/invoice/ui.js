

import indexTemplate from '../templates/invoice/index.handlebars'
export function showInvoiceTable(invoices) {
  $('#content .main').html(indexTemplate(invoices))
}