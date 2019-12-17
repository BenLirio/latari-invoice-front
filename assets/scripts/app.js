'use strict'
const gff = require('../../lib/get-form-fields')
const url = require('./config').apiUrl
const store = require('./store')
const exampleTemplate = require('./templates/example.handlebars')
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
      }).then(res=>{
        res.examples.forEach(example=> {
          $("#examples").prepend(exampleTemplate(example))
        })
      })
    }).catch(()=>e.target.style.background='red')
  })
  $('#sign-out').click(()=>{
    $.ajax({url: url+'/sign-out',method:'DELETE',headers: { 'Authorization': 'Token token='+store.user.token}})
    store.user = {}
    $('#main').hide()
    $('#login').show()
    $('#examples').html('')
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
    }).then(res=>{
      $("#examples").prepend(exampleTemplate(res.example))
    })
  })
  $('#examples').on('click', '.delete',e=>{
    $.ajax({
      url:url+'/examples/' + e.target.id,
      method: 'DELETE',
      headers: { 'Authorization': 'Token token='+store.user.token}
    })
    $('.'+e.target.id).hide()
  })
  $('#examples').on('click', '.change',e=>{
    $.ajax({
      url:url+'/examples/' + e.target.id.slice(1),
      method: 'PATCH',
      headers: { 'Authorization': 'Token token='+store.user.token},
      data: {
        example: {
          text: Math.ceil(Math.random() * 100)
        }
      }
    }).then(res=> {
      $('.'+res.example.id).html(exampleTemplate(res.example))
      if(res.example.text == '100') {
        $('body').css('background-color', 'green')
      }
    })
  })
})
