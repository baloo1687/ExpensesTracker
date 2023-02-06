import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterYear = (filteredYear) => {
    setSelectedYear(filteredYear);
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterYear={filterYear} />
        {filteredExpenses.map(expense => {
            return <ExpenseItem key={expense.id} title={expense.title} amout={expense.amount} date={expense.date} />
        })}
      </Card>
    </div>
  );
}

export default Expenses;