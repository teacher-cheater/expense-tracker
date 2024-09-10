import './App.css';
import {useState} from 'react';
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState([]);
    console.log(expenses)
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="App">
            <ExpenseList expenses={expenses} />
            <ExpenseForm onAdd={addExpense}/>
        </div>
    );
}

export default App;
