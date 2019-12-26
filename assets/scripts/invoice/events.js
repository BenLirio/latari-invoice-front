'use strict'
import { showInvoiceTable, showCreateInvoiceForm, clearModal, clearMain, showUpdateInvoiceForm } from './ui'
import Events from '../base/events'
import { index as indexInvoices, create as createInvoice, destroy as destroyInvoice, update as updateInvoice} from './api'

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
events.listenToButton('main', '.delete', onClickDeleteInvoice)
events.listenToButton('main', '.edit', onClickEditInvoice)
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

function onClickDeleteInvoice(e) {
  const id = e.target.dataset.id
  destroyInvoice(id).then(() => onDeletedInvoice(id))
  
}

function onDeletedInvoice(id) {
  $(`#main [data-id="${id}"]`).hide()
}

function onClickEditInvoice(e) {
  showUpdateInvoiceForm()
}