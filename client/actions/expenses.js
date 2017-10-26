export const ADD_EXPENSE = 'ADD_EXPENSE'

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  }
}
