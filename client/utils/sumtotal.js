export function sumTotal (expenses) {
  return expenses.reduce((totalExpense, expense) => {
    return totalExpense + parseFloat(expense.amount)
  }, 0)
}
