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
      url: this.url + (options.url || '')
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
    options = this.auth(options)
    Object.assign(options, {
      method: 'POST',
      data
    })
    return this.ajax(options)
  }
  update(id, data, options = {}) {
    options = this.auth(options)
    Object.assign(options, {
      method: 'PATCH',
      data,
      url: '/' + id
    })
    return this.ajax(options)
  }
  destroy(id, options = {}) {
    options = this.auth(options)
    Object.assign(options, {
      method: 'DELETE',
      url: '/' + id
    })
    return this.ajax(options)
  }
  auth(options) {
    return Object.assign(options, {
      headers: {
        'Authorization': 'Token token=' + store.user.token
      }
    })
  }
}