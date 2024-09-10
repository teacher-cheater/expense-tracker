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
                        value="meal"
                        checked={formData.category === 'meal'}
                        onChange={handleChange}
                    />
                    <label htmlFor="meal" className={s.categoryLabel}>
                        <img src={bag} alt=""/>
                        Еда
                    </label>

                    <input
                        type="radio"
                        id="transport"
                        name="category"
                        value="transport"
                        checked={formData.category === 'transport'}
                        onChange={handleChange}
                    />
                    <label htmlFor="transport" className={s.categoryLabel}>
                        <img src={car} alt=""/>
                        Транспорт
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="housing"
                        id="housing"
                        checked={formData.category === 'housing'}
                        onChange={handleChange}
                    />
                    <label htmlFor="housing" className={s.categoryLabel}>
                        <img src={house} alt=""/>
                        Жилье
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="entertainments"
                        id="entertainments"
                        checked={formData.category === 'entertainments'}
                        onChange={handleChange}
                    />

                    <label htmlFor="entertainments" className={s.categoryLabel}>
                        <img src={gameboy} alt=""/>
                        Развлечения
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="education"
                        id="education"
                        checked={formData.category === 'education'}
                        onChange={handleChange}
                    />
                    <label htmlFor="education" className={s.categoryLabel}>
                        <img src={teacher} alt=""/>
                        Образование
                    </label>

                    <input
                        type="radio"
                        name="category"
                        value="more"
                        id="more"
                        checked={formData.category === 'more'}
                        onChange={handleChange}
                    />
                    <label htmlFor="more" className={s.categoryLabel}>
                        <img src={more} alt=""/>
                        Другое
                    </label>
                </div>
                <h4 className={s.subtitle}>Дата</h4>
                <label className={s.wrap}>
                    <input name="date" type="text" value={formData.date} onChange={handleChange}
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
