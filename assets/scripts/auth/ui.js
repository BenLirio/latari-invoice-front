import Ui from '../base/ui'

Ui.prototype.showModal = function(name) {
  this.set('modal', name)
  $(`#${name}-modal`).modal('show')
}

const ui = new Ui('auth')
export const showSignIn = () => ui.showModal('sign-in')
export const showSignUp = ()  => ui.showModal('sign-up')
export const showChangePassword = ()  => {
  console.log('modal')
  ui.showModal('change-password')
}
export const clearModal = () => ui.clearModal()

