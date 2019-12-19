const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const store = require('../store')
import { showSignUp } from './ui'

export function notSignedIn() {
  store.user = {}
  document.cookie = ''
  showSignUp()
}

// submit sign-up
import { signUp } from './api'
import { showSignIn } from './ui'
$('#modal').on('submit','#sign-up-form', () => {
  signUp().then(showSignIn())
})

// submit sign-in
import { signIn } from './api'
$('#modal').on('submit','#sign-in-form', () => {
  signIn().then(console.log)
})

// press sign-up
import { showSignUp } from './ui'
$('sign-up-btn').on('click', () => {
  $('#modal').html(signUpFormTemplate())
})

// press change-password
import showChangePassword from './ui'
$('#change-password-btn').on('click', () => {
  $('#modal').html(showChangePassword())
})

// submit change-password
import { changePassword } from './api'
$('#modal').on('submit','#change-password-form', () => {

})

// press log-out
import { signOut } from './api'
$('#sign-out-btn').on('click')





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
  const data = getFormFields(e.target)
  api.changePassword(data)
})

$('#header').on('click', '#sign-out-btn', e => {
  api.signOut().then(()=>notSignedIn())
})