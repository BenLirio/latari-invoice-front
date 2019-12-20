import Api from "../base/api"

const api = new Api()

export function signIn(data) {
  return api.custom({ url: 'sign-in', data, method: 'POST' })
}

export function signUp(data) {
  return api.custom({url: 'sign-up', data, method: 'POST'})
}
