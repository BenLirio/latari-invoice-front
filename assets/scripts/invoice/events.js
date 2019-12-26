'use strict'
import { showInvoiceTable, showCreateInvoiceForm, clearModal, clearMain } from './ui'
import Events from '../base/events'
import { index as indexInvoices, create as createInvoice } from './api'

export function init() {
  index()
}

function index() {
  clearMain()
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
  createInvoice(data)
    .then(createdInvoice)
    .catch(console.error)
}

function createdInvoice(res) {
  const invoice = res.invoice
  clearModal()
  index()
}
