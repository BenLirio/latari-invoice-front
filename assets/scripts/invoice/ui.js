

import indexTemplate from '../templates/invoice/index.handlebars'
export function showInvoiceTable(invoices) {
  $('#content').html(indexTemplate(invoices))
}