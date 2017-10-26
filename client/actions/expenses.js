export const ADD_EXPENSE = 'ADD_EXPENSE'

import {addWeeklyExpenses} from '../apiClient'

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  }
}

export function addExpenseApi (id, expense) {
  return dispatch => {
    addWeeklyExpenses(id, expense)
      .then(res => {
        dispatch(addExpense(expense))
      })
      .catch(() => res.status(500))
  }
}