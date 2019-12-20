import { showNav, showSideBar } from './ui'
export function initNav() {
  showNav()
  showSideBar()
}
import { clearNav, clearSideBar } from './ui'
export function endNav() {
  clearNav()
  clearSideBar()
}