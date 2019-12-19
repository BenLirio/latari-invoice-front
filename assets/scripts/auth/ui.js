import signUpTemplate from '../templates/auth/sign-up.handlebars'
export function showSignUp() {
  $('#modal').html(signUpTemplate())
}

import signInTemplate from '../templates/auth/sign-in.handlebars'
export function showSignIn() {
  $('#modal').html(signInTemplate())
}

import changePasswordTemplate from '../templates/auth/change-password.handlebars'
export function showChangePassword() {
  $('#modal').html(changePasswordTemplate())
}

export function clearModal() {
  $('#modal').html('')
}