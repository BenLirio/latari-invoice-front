import getFormFields from '../../../lib/get-form-fields'
export default class Events {
  listen(area, action, selector, callback) {
    $(`#${area}`).on(action, selector, callback)
  }
  listenModal(name, selector, callback) {
    this.listen('modal', 'click', `#${name}-modal .${selector}`, e => {
      const target = e.target
      const offsetParent = target.offsetParent
      const form = offsetParent.querySelector(`#${name}-form`)
      const data = getFormFields(form)
      callback(data)
    })
  }
}