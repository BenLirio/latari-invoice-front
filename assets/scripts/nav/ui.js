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


