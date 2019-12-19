'use strict'

export let apiUrl
const apiUrls = {
  production: 'https://young-island-83955.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}
