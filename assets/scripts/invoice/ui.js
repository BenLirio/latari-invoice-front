import Ui from '../base/ui'
const ui = new Ui('invoices')

const showModal = function(name) {
  ui.set('modal', name)
  $(`#${name}-invoice-modal`).modal('show')
}
export const showInvoiceTable = function(invoices) {
  ui.set('main', 'index', invoices)
}

export function showCreateInvoiceForm() {
  showModal('create')
}
