'use strict'
import { showInvoiceTable } from './invoice/ui'
import { initAuth } from './auth/events'
import { showSideBar } from './nav/ui'
import store from './store'
$(() => {
  initAuth()
  showSideBar()
  $.ajax({
    url: 'http://localhost:4741/invoices',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  }).then(showInvoiceTable)
})
  
 