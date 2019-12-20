export default class Ui {
  constructor(base) {
    this.base = base || ''
  }
  set(area,templateName,data) {
    const template = require(`../templates/${this.base}/${templateName}.handlebars`)
    $(`#${area}`).html(template(data))
  }
  clear(area) {
    $(`#${area}`).html('')
  }
  clearModal() {
    $('#modal .modal').modal('hide')
  }
}