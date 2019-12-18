import signUpTemplate from '../templates/auth/sign-up.handlebars'
export function showSignUp() {
  $('#content').html(signUpTemplate())
}

import signInTemplate from '../templates/auth/sign-in.handlebars'
export function showSignIn() {
  $('#content').html(signInTemplate())
}

