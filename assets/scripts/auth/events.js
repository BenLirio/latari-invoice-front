const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
import { showSignUp } from './ui'
showSignUp()


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
  console.log(e)
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signIn(data)
    .then(()=>console.log('log in success'))
}

