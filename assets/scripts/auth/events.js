const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const store = require('../store')
import { showSignUp } from './ui'

export function notSignedIn() {
  showSignUp()
}

import { showSignIn } from './ui'
$('#modal').on('submit', '#sign-up', e => {
  onSignUp(e)
})
const onSignUp = function(e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signUp(data)
    .then(res=> {
      showSignIn()
    })

}


$('#modal').on('submit', '#sign-in', e => {
  onSignIn(e)
})
const onSignIn = function(e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signIn(data)
    .then(successfullySignedIn)
}
function successfullySignedIn(res) {
  store.user = res.user
  document.cookie = JSON.stringify(res.user)
}
