const apiUrl = require('../config').apiUrl

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

module.exports = {
  signIn,
  signUp
}