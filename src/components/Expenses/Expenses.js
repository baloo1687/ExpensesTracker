import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const filterYear = (filteredYear) => {
    setSelectedYear(filteredYear);
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterYear={filterYear} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;