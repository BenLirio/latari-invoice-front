import getFormFields from '../../../lib/get-form-fields'
import store from '../store'

import Events from '../base/events'
import { signIn, signUp } from './api'
import { showSignIn, clearModal, showSignUp } from './ui'




Events.prototype.listenToSubmitModal = function(name,callback) {
  this.listenModal(name, 'submit', callback)
}

const events = new Events()
showSignIn()
events.listenToButton('modal', '#sign-in-modal .sign-up-btn', onClickSignUpBtn)
events.listenToButton('modal', '#sign-up-modal .sign-in-btn', onClickSignInBtn)
events.listenToSubmitModal('sign-in', onSignIn)
events.listenToSubmitModal('sign-up', onSignUp)
export default events
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
function onSignIn(data) {
  signIn(data).then(console.log)
  clearModal()
}
function onSignUp(data) {
  signUp(data).then(console.log)
  clearModal()
  $('#modal .modal').on('hidden.bs.modal', function (e) {
    showSignIn()
  })
}




// import { clearModal } from './ui'

// import { initNav } from '../nav/events'
// import { clearMain } from '../invoice/ui'
// export function initAuth() {
//   let user
//   const cookie = document.cookie
//   if (cookie) {
//     try {
//       user = JSON.parse(cookie)
//     } catch (e) {
//       console.log('Error parsing cooking\nresetting...')
//       document.cookie = ''
//     }
//   }
//   if (user) {
//     store.user = user
//     clearModal()
//     initNav()
//     initInvoice()
//   } else {
//     showSignIn()
//   }
// }

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