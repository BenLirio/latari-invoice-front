import headerTemplate from '../templates/header.handlebars'
export function showNav() {
  $('#header').html(headerTemplate())
}

export function clearNav() {
  $('#header').html('')
}