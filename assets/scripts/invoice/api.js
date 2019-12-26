import Api from '../base/api'

const api = new Api('invoices')

export const index = () => api.index()
