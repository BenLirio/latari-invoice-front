
import store from '../store'

import Events from '../base/events'
import { signIn, signUp, changePassword, signOut } from './api'
import { showSignIn, clearModal, showSignUp, showChangePassword, clearAll } from './ui'
import { init as invoiceInit } from '../invoice/events'
import { init as navInit } from '../nav/events'

const events = new Events()
if(!autoSignIn()) {
  showSignIn()
}

events.listenToButton('modal', '#sign-in-modal .sign-up-btn', onClickSignUpBtn)
events.listenToButton('modal', '#sign-up-modal .sign-in-btn', onClickSignInBtn)
events.listenToButton('header', '#change-password-btn', onClickChangePasswordButton)
events.listenToButton('header', '#sign-out-btn', onClickSignOutBtn)
events.listenToSubmitModal('sign-in', onSignIn)
events.listenToSubmitModal('sign-up', onSignUp)
events.listenToSubmitModal('change-password', onChangePassword)
export default events

function onClickChangePasswordButton(e) {
  showChangePassword()
}
function onClickSignUpBtn(e) {
  clearModal()
  $('#modal .modal').on('hidden.bs.modal', function (e) {
    showSignUp()
  })
}
function onClickSignInBtn(e) {
  clearModal()
  $('#modal .modal').on('hidden.bs.modal', function (e) {
    showSignIn()
  })
}
function onClickSignOutBtn(e) {
  document.cookie = ''
  signOut().then(()=> {
    clearAll()
    showSignIn()
  })
}
function onSignIn(data) {
  $('#sign-in-modal form input[type="password"]').removeClass('is-invalid')
  signIn(data)
    .then(res => {
      authenticate(res.user)
      clearModal()
    })
    .catch(failedSignIn)
}
function onSignUp(data) {
  signUp(data).then( () => {
    clearModal()
    $('#modal .modal').on('hidden.bs.modal', function (e) {
      showSignIn()
    })
  })
  .catch(err => {
    $('#sign-up-modal form input').addClass('is-invalid')
    $('#sign-up-modal form input').val('')
  })
}
function onChangePassword(data) {
  
  $('#change-password-modal form input').removeClass('is-invalid')
  changePassword(data).then(() => clearModal()).catch(()=>{
    $('#change-password-modal form input').val('')
    $('#change-password-modal form input').addClass('is-invalid')
  })
}

function storeUser(user) {
  const pojo = JSON.stringify(user)
  store.user = user
  document.cookie = pojo
}

function autoSignIn() {
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
    authenticate(user)
    return true
  }
  return false
}

function authenticate(user) {
  storeUser(user)
  invoiceInit()
  navInit()
}

export function failedSignIn(e) {
  $('#sign-in-modal form input[type="password"]').addClass('is-invalid')
  $('#sign-in-modal form input').val('')
}

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
    initNav()
    initInvoice()
  } else {
    showSignIn()
  }
}
