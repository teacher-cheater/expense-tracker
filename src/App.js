import './App.css';
import {useEffect, useState} from 'react';
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem('expenses');
        return storedExpenses ? JSON.parse(storedExpenses) : [];
    });

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    console.log(expenses)

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        const updateExpenses = expenses.filter((expense)=> expense.id !== id)
        setExpenses(updateExpenses);
    };

    return (
        <div className="App">
            <div className="my-expenses">
                <ExpenseList expenses={expenses} onDelete={deleteExpense}/>
                <ExpenseForm onAdd={addExpense} />
            </div>
        </div>
    );
}

export default App;
