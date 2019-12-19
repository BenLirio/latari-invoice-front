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
$('#modal').on('submit','#sign-up-form', e => {
  e.preventDefault()
  const target = e.target
  const data = getFormFields(target)
  signUp(data)
    .then(() => showSignIn())
})

// submit sign-in
import { signIn } from './api'
$('#modal').on('submit','#sign-in-form', () => {
  const getUser = response => {
    return response.user
  }
  const storeUser = function(user) {
    store.user = user
    return store.user
  }
  const stringifyUser = function(pojoUser) {
    return JSON.stringify(pojoUser)
  }
  const setCookie  = function(jsonUser) {
    document.cookie = jsonUser
    return jsonUser
  }
  signIn()
    .then(getUser)
    .then(storeUser)
    .then(stringifyUser)
    .then(setCookie)
})

// press sign-up
import { showSignUp } from './ui'
$('#modal').on('click', 'sign-up-btn', () => {
  $('#modal').html(signUpFormTemplate())
})

// press change-password
import showChangePassword from './ui'
$('#header').on('click', '#change-password-btn', () => {
  $('#modal').html(showChangePassword())
})

// submit change-password
import { changePassword } from './api'
$('#modal').on('submit','#change-password-form', () => {
  changePassword().then(console.log)
})

// press log-out
import { signOut } from './api'
import { showSignIn } from './ui'
$('#header').on('click', '#sign-out-btn', () => {
  signOut().then(()=>showSignIn())
})






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