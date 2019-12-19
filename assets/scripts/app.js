'use strict'
import { showInvoiceTable } from './invoice/ui'
import { initAuth } from './auth/events'
import store from './store'
$(() => {
  initAuth()
  $.ajax({
    url: 'http://localhost:4741/invoices',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  }).then(showInvoiceTable)
})
  
 