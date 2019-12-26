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

export function showUpdateInvoiceForm() {
  showModal('update')
}

export const clearModal = ui.clearModal
export const clearMain = function() {
  ui.clear('main')
}