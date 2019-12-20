const apiUrl = require('../config').apiUrl
const url = require('../config').apiUrl + '/invoices'
import store from '../store'

export function index() {
  return $.ajax({
    url,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

export function create(data) {
  console.log(store)
  return $.ajax({
    url: url,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}