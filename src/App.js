import './App.css';
import {useEffect, useState} from 'react';
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem('expenses');
        return storedExpenses ? JSON.parse(storedExpenses) : [];
    });
    const [sort, setSort] = useState(false);
    const [filteredCategory, setFilteredCategory] = useState('');

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        const updateExpenses = expenses.filter((expense) => expense.id !== id)
        setExpenses(updateExpenses);
    };

    const filterExpenses = (category) => {
        setFilteredCategory(category);
    };

    const sortExpenses = () => {
        setSort(!sort);
    };

    const filteredExpenses = expenses.filter(expense =>
        filteredCategory ? expense.category === filteredCategory : true
    );

    const sortedExpenses = sort
        ? [...filteredExpenses].sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        : filteredExpenses;

    return (
        <div className="App">
            <Header/>
            <Main/>
            <div className="my-expenses">
                <ExpenseList expenses={sortedExpenses} onDelete={deleteExpense} sortExpenses={sortExpenses}
                             filterExpenses={filterExpenses}/>
                <ExpenseForm onAdd={addExpense}/>
            </div>
        </div>
    );
}

export default App;
