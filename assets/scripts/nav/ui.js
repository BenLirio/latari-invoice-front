import headerTemplate from '../templates/header.handlebars'
export function showNav() {
  $('#header').html(headerTemplate())
}

export function clearNav() {
  $('#header').html('')
}

import sideBarTemplate from '../templates/side-bar.handlebars'
export function showSideBar() {
  $('#content .side-bar').html(sideBarTemplate())
}