const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const store = require('../store')
import { showSignUp } from './ui'

export function notSignedIn() {
  store.user = {}
  document.cookie = ''
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

import { showChangePassword } from './ui'
$('#header').on('click', '#change-password-btn', e => {
  console.log(e)
  showChangePassword()
})

$('#modal').on('submit', '#change-password', e => {
  e.preventDefault()
  api.changePassword()
})

$('#header').on('click', '#sign-out-btn', e => {
  api.signOut().then(()=>notSignedIn())
})