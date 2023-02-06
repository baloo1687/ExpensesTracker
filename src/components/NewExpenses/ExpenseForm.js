import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const formHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    props.onSaveExpenseDataHandler(formData);

    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={formHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text'
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
          type='date'
          onChange={dateChangeHandler}
          min='2019-01-01'
          max='2022-12-31'
          value={date}
        />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Submit expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;