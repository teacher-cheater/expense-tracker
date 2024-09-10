import React from 'react';

const ExpenseList = ({expenses}) => {
    return (
        <div>
            {expenses.map(expense => (
                <div key={expense.id} className="expense-item">
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
