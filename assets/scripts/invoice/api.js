import Api from '../base/api'

const api = new Api('invoices')

export const index = api.index.bind(api)
export const create = api.create.bind(api)
export const destroy = api.destroy.bind(api)
export const update = api.update.bind(api)