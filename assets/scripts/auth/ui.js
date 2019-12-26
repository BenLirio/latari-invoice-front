import Ui from '../base/ui'
const ui = new Ui('auth')


const showModal = function(name) {
  ui.set('modal', name)
  $(`#${name}-modal`).modal('show')
}

export const clearAll = function() {
  ui.clear('header')
  ui.clear('side-bar')
  ui.clear('main')
}


export const showSignIn = () => showModal('sign-in')
export const showSignUp = ()  => showModal('sign-up')
export const showChangePassword = ()  => showModal('change-password')
export const clearModal = ui.clearModal