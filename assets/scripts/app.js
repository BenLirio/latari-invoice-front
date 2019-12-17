'use strict'
const gff = require('../../lib/get-form-fields')
const url = require('./config').apiUrl
const store = require('./store')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#main').hide()
  $('#sign-up').submit((e)=>{
    e.preventDefault()
    $.ajax({
      url: url+'/sign-up',
      method:'POST',
      data:gff(e.target)
    }).then(()=>e.target.style.background='green').catch(()=>e.target.style.background='red')
  })
  $('#sign-in').submit(e=>{
    e.preventDefault()
    $.ajax({
      url: url+'/sign-in',
      method:'POST',
      data:gff(e.target)
    }).then(res=>{
      store.user = res.user
      $('#login').hide()
      $('#main').show()
      $.ajax({
        url:url+'/examples',
        method: 'GET',
        headers: { 'Authorization': 'Token token='+store.user.token}
      }).then($("#examples").prepend('hello'))
    }).catch(()=>e.target.style.background='red')
  })
  $('#sign-out').click(()=>{
    $.ajax({url: url+'/sign-out',method:'DELETE',headers: { 'Authorization': 'Token token='+store.user.token}}).then(console.log)
    store.user = {}
    $('#main').hide()
    $('#login').show()
  })
  $('#change-password').submit((e)=> {
    e.preventDefault()
    $.ajax({
      url: url+'/change-password/',
      method:'PATCH',
      headers: { 'Authorization': 'Token token='+store.user.token},
      data:gff(e.target)
    }).then(()=>e.target.style.background='green').catch(()=>e.target.style.background='red')
  })
  $('#example').submit(e=>{
    e.preventDefault()
    $.ajax({
      url: url +'/examples',
      headers: { 'Authorization': 'Token token='+store.user.token},
      method: 'POST',
      data:gff(e.target)
    }).then(console.log)
  })
})
