'use strict'
import { notSignedIn } from './auth/events'
import { showHeader } from './nav/ui'
const store = require('./store')
if(document.cookie) {
  let user
  try {
    user = JSON.parse(document.cookie)
  } catch (e) {
    console.error(e)
  }
  store.user = user || {}
} else {
  notSignedIn()
}
$(() => {
  showHeader()
})
  
 