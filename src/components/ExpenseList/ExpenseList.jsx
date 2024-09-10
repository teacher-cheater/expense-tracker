import React from 'react';
import s from './ExpenseList.module.css';

const ExpenseList = ({expenses}) => {
    return (
        <div className={s.list}>
            {expenses.map(expense => (
                <div key={expense.id} className={s.expenseItem}>
                    <div>{expense.description}</div>
                    <div>{expense.category}</div>
                    <div>{expense.date}</div>
                    <div>{expense.amount}</div>
                    <button onClick={() => console.log(expense.id)}>1</button>
                    <button onClick={() => console.log(expense.id)}>x</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;
