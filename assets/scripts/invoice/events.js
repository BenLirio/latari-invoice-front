'use strict'
import getFormFields from '../../../lib/get-form-fields'


import { showInvoiceTable } from './ui'
import { index as indexInvoices } from './api'
export function init() {
  indexInvoices()
    .then(showInvoiceTable)
    .catch(console.error)
}


// Show Invoice Form
import { showCreateInvoiceForm } from './ui'
$('#content .side-bar').on('click', '#create-invoice-btn', () => {
  showCreateInvoiceForm()
})


// Submit Invoice Form
import { clearModal } from './ui'
import { create as createInvoice } from './api'
$('#modal').on('submit', '#create-invoice-form', e => {
  e.preventDefault()
  const target = e.target
  const data = getFormFields(target)
  createInvoice(data)
    .then(()=>clearModal())
})

$('#modal').on('click', '#invoice-create-form-cancel', () => {
  clearModal()
})