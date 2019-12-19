import getFormFields from '../../../lib/get-form-fields'
import store from '../store'

import { clearModal } from './ui'
import { showSignIn } from './ui'
export function initAuth() {
  let user
  const cookie = document.cookie
  if (cookie) {
    try {
      user = JSON.parse(cookie)
    } catch (e) {
      console.log('Error parsing cooking\nresetting...')
      document.cookie = ''
    }
  }
  if (user) {
    store.user = user
    clearModal()
  } else {
    showSignIn()
  }
}

// submit sign-up
import { signUp } from './api'
/* import { clearModal } from './ui' */
/* import { signUp } from './api' */
/* import { showSignIn } from './ui' */
$('#modal').on('submit','#sign-up-form', e => {
  e.preventDefault()
  const target = e.target
  const data = getFormFields(target)

  signUp(data)
    .then(()=>showSignIn())
    .catch(console.error)
})

// submit sign-in
import { signIn } from './api'
/* import { clearModal } from './ui' */
$('#modal').on('submit','#sign-in-form', e => {
  e.preventDefault()
  const target = e.target
  const data = getFormFields(target)

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
  signIn(data)
    .then(getUser)
    .then(storeUser)
    .then(stringifyUser)
    .then(setCookie)
    .then(() => clearModal())
    .catch(console.error)
})

// press sign-up
import { showSignUp } from './ui'
$('#modal').on('click', '#sign-up-btn', () => {
  showSignUp()
})

// press change-password
import { showChangePassword } from './ui'
$('#header').on('click', '#change-password-btn', () => {
  showChangePassword()
})

// submit change-password
/* import { clearModal } from './ui' */
import { changePassword } from './api'
$('#modal').on('submit','#change-password-form', e => {
  e.preventDefault()
  const target = e.target
  const data = getFormFields(target)
  changePassword(data).then(console.log)
})

// press log-out
import { signOut } from './api'
/* import { showSignIn } from './ui' */
$('#header').on('click', '#sign-out-btn', () => {
  const clearCookies = function() {
    document.cookie = ''
    return document.cookie
  }
  signOut()
    .then(clearCookies)
    .then(()=>showSignIn())
})