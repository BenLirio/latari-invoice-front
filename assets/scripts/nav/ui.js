import headerTemplate from '../templates/header.handlebars'

export function showHeader() {
  $('#header').html(headerTemplate())
}