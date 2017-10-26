import {ADD_EXPENSE} from '../actions/expenses'

export default function expenses (state = [], action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense]
    // case 'DEL_EXPENSE':
    //   return {
    //     expenses: state.expenses.filter((expense) => expense !== action.expense)
    //   }
    // case 'UPDATE_EXPENSE':
    //   return {
    //     expenses: state.expenses.map((expense) => {
    //       return expense === action.oldName ? action.newName : expense
    //     })
    //   }
    default:
      return state
  }
}
