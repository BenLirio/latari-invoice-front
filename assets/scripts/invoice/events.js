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

}

const events = new Events()

events.listenToButton('side-bar', '#create-invoice-btn', onClickCreateInvoiceBtn)
events.listenToButton('main', '.delete', onClickDeleteInvoice)
events.listenToButton('main', '.edit', onClickEditInvoice)
events.listenToSubmitModal('create-invoice', onCreateInvoice)
events.listenToSubmitModal('update-invoice', onUpdateInvoice)

function onClickCreateInvoiceBtn(e) {
  showCreateInvoiceForm()
}

function onCreateInvoice(data) {
  createInvoice(data)
    .then(createdInvoice)
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
let currentUpdateId = 0
function onClickEditInvoice(e) {
  const id = e.target.dataset.id
  currentUpdateId = id
  showUpdateInvoiceForm()
}

function onUpdateInvoice(data) {
  updateInvoice(currentUpdateId, data)
    .then(() => {
      clearModal()
      index()
    })
}
