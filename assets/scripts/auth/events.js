
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
  signIn(data)
    .then(res => {
      authenticated(res.user)
    })
  clearModal()
}
function onSignUp(data) {
  signUp(data).then( () => {
    clearModal()
    $('#modal .modal').on('hidden.bs.modal', function (e) {
      showSignIn()
    })
  })
}
function onChangePassword(data) {
  changePassword(data).then(() => clearModal())
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
    authenticated(user)
    return true
  }
  return false
}

function authenticated(user) {
  storeUser(user)
  invoiceInit()
  navInit()
}


// import { clearModal } from './ui'

// import { initNav } from '../nav/events'
// import { clearMain } from '../invoice/ui'
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

// // submit sign-up
// import { signUp } from './api'
// /* import { clearModal } from './ui' */
// /* import { signUp } from './api' */
// /* import { showSignIn } from './ui' */
// $('#modal').on('submit','#sign-up-form', e => {
//   e.preventDefault()
//   const target = e.target
//   const data = getFormFields(target)
  
//   signUp(data)
//   .then(()=>showSignIn())
//   .catch(console.error)
// })

// /* import { showSignIn } from './ui' */
// $('#modal').on('click', '#sign-up-form-cancel', e => {
//   showSignIn()
// })

// // submit sign-in
// /* import { initNav } from '../nav/events' */
// import { init as initInvoice } from '../invoice/events'
// import { signIn } from './api'
// /* import { clearModal } from './ui' */
// $('#modal').on('submit','#sign-in-form', e => {
//   e.preventDefault()
//   const target = e.target
//   const data = getFormFields(target)

//   const getUser = response => {
//     return response.user
//   }
//   const storeUser = function(user) {
//     store.user = user
//     return store.user
//   }
//   const stringifyUser = function(pojoUser) {
//     return JSON.stringify(pojoUser)
//   }
//   const setCookie  = function(jsonUser) {
//     document.cookie = jsonUser
//     return jsonUser
//   }
//   signIn(data)
//     .then(getUser)
//     .then(storeUser)
//     .then(stringifyUser)
//     .then(setCookie)
//     .then(() => {
//       clearModal()
//       initNav()
//       initInvoice()
//     })
//     .catch(console.error)
// })

// // press sign-up
// import { showSignUp } from './ui'
// $('#modal').on('click', '#sign-up-btn', () => {
//   showSignUp()
// })

// // press change-password
// import { showChangePassword } from './ui'
// $('#header').on('click', '#change-password-btn', () => {
//   showChangePassword()
// })

// // submit change-password
// /* import { clearModal } from './ui' */
// import { changePassword } from './api'
// events.listenToForm('modal', 'change-password', data => {
//   changePassword(data)
// })
// $('#modal').on('submit','#change-password-form', e => {
//   e.preventDefault()
//   const target = e.target
//   const data = getFormFields(target)
//   changePassword(data).then(console.log)
// })

// /* import { clearModal } from './ui' */
// $('#modal').on('click', '#change-password-cancel', e => {
//   clearModal()
// })

// // press log-out
// import { signOut } from './api'
// /* import { showSignIn } from './ui' */
// import { endNav } from '../nav/events'
// $('#header').on('click', '#sign-out-btn', () => {
//   const clearCookies = function() {
//     document.cookie = ''
//     return document.cookie
//   }
//   signOut()
//     .then(clearCookies)
//     .then(()=>{
//       showSignIn()
//       endNav()
//       clearMain()
//     })
// })