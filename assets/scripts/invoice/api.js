const apiUrl = require('../config').apiUrl
const url = require(apiUrl + '/invoices')

export function index() {
  $.ajax({
    url,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}