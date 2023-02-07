import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.expenses.length) {
    return (
      <ul className="expenses-list">
        {props.expenses.map(expense => {
          return <ExpenseItem key={expense.id} title={expense.title} amout={expense.amount} date={expense.date} />
        })}
      </ul>
    )
  }
  
  return (
    <h2 className="expenses-list__fallback">No expenses found</h2>
  )
}

export default ExpensesList;
