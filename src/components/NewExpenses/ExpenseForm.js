import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const today = new Date();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
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
      amount: parseInt(amount),
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
          max={new Date().getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')}
          value={date}
        />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.onCancel} type='button'>Cancel</button>
        <button type='submit'>Submit expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;