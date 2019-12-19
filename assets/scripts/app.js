'use strict'
import { showHeader } from './nav/ui'
import { initAuth } from './auth/events'
$(() => {
  initAuth()
})
  
 