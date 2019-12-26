import { apiUrl } from '../config'
import store from '../store'
export default class Api {
  constructor(recourse) {
    this.url = `${apiUrl}/${recourse}`
  }
  custom(options) {
    Object.assign(options, {
      url: `${apiUrl}/${options.url}`
    })
    return $.ajax(options)
  }
  ajax(options) {
    Object.assign(options, {
      url: this.url
    })
    return $.ajax(options)
  }
  

  index(options = {}) {
    options = this.auth(options)
    Object.assign(options, {
      method: 'GET',
    })
    return this.ajax(options)
  }
  select() {
    Object.assign(options, {
      method: 'GET'
    })
  }
  create(data, options = {}) {
    console.log(data)
    options = this.auth(options)
    Object.assign(options, {
      method: 'POST',
      data
    })
    return this.ajax(options)
  }
  update(options) {
    Object.assign(options, {
      method: 'PATCH'
    })
  }
  destroy(options) {
    Object.assign(options, {
      method: 'DELETE'
    })
  }
  auth(options) {
    return Object.assign(options, {
      headers: {
        'Authorization': 'Token token=' + store.user.token
      }
    })
  }
}