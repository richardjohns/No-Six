import request from 'superagent'
import {getUserTokenInfo} from './utils/auth'
import {get} from './utils/localstorage'

export function getWeeklyExpenses (id) {
  return request.get(`/api/contractor/expenses/users/${id}`)
}
export function updateWeeklyExpenses (expense) {
  const token = get('token')
  return request.put('/api/contractor/expenses/users')
    .set('Authorization', `Bearer ${token}`)
    .send(expense)
}
export function addWeeklyExpenses (expense) {
  const token = get('token')
  return request.post('/api/contractor/expenses/users')
    .set('Authorization', `Bearer ${token}`)
    .send(expense)
}

export function fetchCurrentUser (id) {
  return request.get('/api/v1/users/' + id)
}