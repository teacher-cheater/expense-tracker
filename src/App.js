import './App.css';
import {useState} from 'react';
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

function App() {

    const [formData, setFormData] = useState({description: '', date: '', category: '', amount: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({description: '', date: '', category: '', amount: ''});
        console.log(formData)
    };


    // const calculateBricksCount = (width, height) => {
    //     let rows = height / 5;
    //     let bricksL = width / 60;
    //     let resBrickL = 0;
    //     let resBrickM = 0;
    //     let resBrickS = 0;
    //
    //     for (let i = 1; i < rows; i++) {
    //         if (i % 3 === 1) {
    //             resBrickL += bricksL
    //         } else if (i % 3 === 2) {
    //             resBrickM += 1;
    //             resBrickS += 1;
    //             resBrickL += bricksL - 2
    //         } else if (i % 3 === 0){
    //             resBrickM += 1;
    //             resBrickS += 1;
    //             resBrickL += bricksL - 2
    //         }
    //     }
    //
    //     console.log(resBrickL)
    //     console.log(resBrickM)
    //     console.log(resBrickS)
    //
    //
    // }
    //
    // console.log(calculateBricksCount(180, 45)) // '21L6M6S'
    // // console.log(calculateBricksCount(60, 5)) // '1L'


    return (
        <div className="App">
            <ExpenseForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
        </div>
    );
}

export default App;
