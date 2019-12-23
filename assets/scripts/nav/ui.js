// showNav
import Ui from '../base/ui'
const ui = new Ui('nav')

Ui.prototype.showNav = function() {
  ui.set('header', 'header')
}
Ui.prototype.showSideBar = function() {
  ui.set('side-bar', 'side-bar')
}


export const showNav = () => ui.showNav()
export const showSideBar = () => ui.showSideBar()
export const clearNav = () => ui.clear('header')
export const clearSideBar = () => ui.clear('side-bar')
