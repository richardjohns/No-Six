import { NEW_TRANSACTION } from '../actions/submitLedgerEntry'

export default function transactions(state = [], action) {
    switch (action.type) {
        case NEW_TRANSACTION:
            return [...state, action]
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
