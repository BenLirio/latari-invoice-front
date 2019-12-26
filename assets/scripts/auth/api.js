import Api from "../base/api"
import store from "../store"

const api = new Api()

export function signIn(data) {
  return api.custom({ url: 'sign-in', data, method: 'POST' })
}

export function signUp(data) {
  return api.custom({url: 'sign-up', data, method: 'POST'})
}

export function changePassword(data) {
  return api.custom(api.auth({url: 'change-password', data, method: 'PATCH'}))
}

export function signOut() {
  return api.custom(api.auth({url: 'sign-out', method: 'DELETE'}))
}