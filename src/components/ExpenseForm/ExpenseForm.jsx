import React, {useState} from 'react';
import s from './ExpenseForm.module.css';
import car from '../../images/icons/car.svg';
import bag from '../../images/icons/bag.svg';
import gameboy from '../../images/icons/gameboy.svg';
import house from '../../images/icons/house.svg';
import more from '../../images/icons/more.svg';
import teacher from '../../images/icons/teacher.svg';

const ExpenseForm = ({onAdd}) => {

    const [formData, setFormData] = useState({description: '', date: '', category: '', amount: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({...formData, id: Date.now()});
        setFormData({description: '', date: '', category: '', amount: ''});
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className={s.expenses}>
            <h2 className={s.title}>Новый расход</h2>
            <form onSubmit={handleSubmit}>
                <label className={s.wrap}>
                    <h4 className={s.subtitle}>Описание</h4>
                    <input name="description" type="text" value={formData.description} onChange={handleChange}
                           required placeholder="Введите описание"/>
                </label>
                <div className={s.wrapper}>
                    <h4 className={s.subtitle}>Категория</h4>
                    <input
                        type="radio"
                        id="meal"
                        name="category"
                        value="еда"
                        checked={formData.category === 'еда'}
                        onChange={handleChange}
                    />
                    <label htmlFor="meal" className={s.categoryLabel}>
                        <img src={bag} alt="meal"/>
                        Еда
                    </label>

                    <input
                        type="radio"
                        id="transport"
                        name="category"
                        value="транспорт"
                        checked={formData.category === 'транспорт'}
                        onChange={handleChange}
                    />
                    <label htmlFor="transport" className={s.categoryLabel}>
                        <img src={car} alt="transport"/>
                        Транспорт
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="жилье"
                        id="housing"
                        checked={formData.category === 'жилье'}
                        onChange={handleChange}
                    />
                    <label htmlFor="housing" className={s.categoryLabel}>
                        <img src={house} alt="housing"/>
                        Жилье
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="развлечения"
                        id="entertainments"
                        checked={formData.category === 'развлечения'}
                        onChange={handleChange}
                    />

                    <label htmlFor="entertainments" className={s.categoryLabel}>
                        <img src={gameboy} alt="entertainments"/>
                        Развлечения
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="образование"
                        id="education"
                        checked={formData.category === 'образование'}
                        onChange={handleChange}
                    />
                    <label htmlFor="education" className={s.categoryLabel}>
                        <img src={teacher} alt="education"/>
                        Образование
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="другое"
                        id="more"
                        checked={formData.category === 'другое'}
                        onChange={handleChange}
                    />
                    <label htmlFor="more" className={s.categoryLabel}>
                        <img src={more} alt="more"/>
                        Другое
                    </label>
                </div>
                <h4 className={s.subtitle}>Дата</h4>
                <label className={s.wrap}>
                    <input name="date" type="date" value={formData.date} onChange={handleChange}
                           placeholder="Введите дату" required/>
                </label>
                <label className={s.wrap}>
                    <h4 className={s.subtitle}>Сумма</h4>
                    <input name="amount" type="number" value={formData.amount} onChange={handleChange}
                           placeholder="Введите сумму" required/>
                </label>
                <button className={s.btn} type="submit">Добавить новый расход</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
