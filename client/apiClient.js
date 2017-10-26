import request from 'superagent'

export function getWeeklyExpenses (id) {
  return request.get(`/api/contractor/expenses/users/${id}`)
}
export function updateWeeklyExpenses (id, expense) {
  return request.put(`/api/contractor/expenses/users/${id}`)
  .send(expense)
}
export function addWeeklyExpenses (id, expense) {
  return request.post(`/api/contractor/expenses/users/${id}`)
  .send(expense)
}