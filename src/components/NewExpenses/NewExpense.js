import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddNewExpenses(expenseData)

    setIsShowForm(false);
  }

  const addNewExpenseHandler = () => {
    setIsShowForm(true);
  }

  const cancelNewExpenseHandler = () => {
    setIsShowForm(false);
  }

  return (
    <div className='new-expense'>
      {!isShowForm && <button onClick={addNewExpenseHandler} type='button'>Add new expense</button>}
      {isShowForm && <ExpenseForm onCancel={cancelNewExpenseHandler} onSaveExpenseDataHandler={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;