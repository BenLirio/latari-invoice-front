const apiUrl = require('../config').apiUrl
const store = require('../store')

const signUp = function(data) {
  return $.ajax({
    url: apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function(data) {
  return $.ajax({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data
    
  })
}

const changePassword = function(data) {
  return $.ajax({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function() {
  return $.ajax({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut
}