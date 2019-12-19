import { apiUrl } from '../config'
import store from '../store'

export function signUp(data) {
  return $.ajax({
    url: apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

export function signIn(data) {
  return $.ajax({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data
    
  })
}

export function changePassword(data) {
  return $.ajax({
    url: apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

export function signOut() {
  return $.ajax({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
