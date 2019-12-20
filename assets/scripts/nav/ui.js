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


// Clear function

export function clearMain() {
  $('#content .main').html('')
}

export function clearSideBar() {
  $('#content .side-bar').html('')
}

export function clearModal() {
  $('#modal').html('')
}