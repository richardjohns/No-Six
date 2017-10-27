export const ADD_EXPENSE = 'ADD_EXPENSE'

import {addWeeklyExpenses} from '../apiClient'

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  }
}

export function addExpenseApi (expense) {
  return dispatch => {
    addWeeklyExpenses(expense)
      .then(() => {
        dispatch(addExpense(expense))
      })
      .catch((err) => console.log(err.message))
  }
}