'use strict'
import { showInvoiceTable, showCreateInvoiceForm } from './ui'
import Events from '../base/events'
import { index as indexInvoices } from './api'

export function init() {
  indexInvoices()
    .then(showInvoiceTable)
    .catch(console.error)
}

const events = new Events()

events.listenToButton('side-bar', '#create-invoice-btn', onClickCreateInvoiceBtn)
events.listenToSubmitModal('create-invoice', onCreateInvoice)

function onClickCreateInvoiceBtn(e) {
  showCreateInvoiceForm()
}

function onCreateInvoice(data) {
  console.log(data)
}
