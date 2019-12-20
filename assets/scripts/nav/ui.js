// showNav
import headerTemplate from '../templates/header.handlebars'
export function showNav() {
  $('#header').html(headerTemplate())
}

// showSideBar
import sideBarTemplate from '../templates/side-bar.handlebars'
export function showSideBar() {
  $('#content .side-bar').html(sideBarTemplate())
}


// Clear function
export function clearNav() {
  $('#header').html('')
}

export function clearMain() {
  $('#content .main').html('')
}

export function clearSideBar() {
  $('#content .side-bar').html('')
}

export function clearModal() {
  $('#modal').html('')
}