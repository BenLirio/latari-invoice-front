import Ui from '../base/ui'
const ui = new Ui('invoices')


Ui.prototype.showInvoiceTable = function(invoices) {
  ui.set('main', 'index', invoices)
  
}
export const showInvoiceTable = invoices => ui.showInvoiceTable(invoices)

export function showCreateInvoiceForm() {
  $('#modal').html(createInvoiceTemplate())
}
