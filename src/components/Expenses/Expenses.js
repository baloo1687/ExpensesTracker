import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import { useState } from 'react';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const getFilteredYear = (filteredYear) => {
    setSelectedYear(filteredYear);
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onGetFilteredYear={getFilteredYear} />
        {props.expenses.map(expense => {
            return <ExpenseItem key={expense.id} title={expense.title} amout={expense.amount} date={expense.date} />
        })}
      </Card>
    </div>
  );
}

export default Expenses;