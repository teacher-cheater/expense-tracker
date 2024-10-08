import React from 'react';
import s from './ExpenseList.module.css';
import pen from '../../images/icons/pen.svg'
import bag from '../../images/icons/del.svg'
import arrow from '../../images/icons/arrow.svg'

const ExpenseList = ({expenses, onDelete, sortExpenses, filterExpenses}) => {
    return (
        <div className={s.list}>
            <div className={s.headerExpense}>
                <h4 className={s.tblTitle}>Таблица расходов</h4>
                <div className={s.blockFilter}>
                    <div className={s.selectWrapper}>
                        <span className={s.titleFilter}>Фильтровать по</span>
                        <select className={s.filterExpense} onChange={(e) => filterExpenses(e.target.value)}>
                            <option value="">категории</option>
                            <option value="еда">еда</option>
                            <option value="транспорт">транспорт</option>
                            <option value="жилье">жилье</option>
                            <option value="развлечения">развлечения</option>
                            <option value="образование">образование</option>
                            <option value="другое">другое</option>
                        </select>
                        <img src={arrow} alt="arrow" className={s.selectIcon} />
                    </div>
                    <div>
                        <span onClick={() => sortExpenses()} className={s.titleFilter}>Сортировать по <span
                            className={s.sortDate}>дате</span> <img src={arrow} alt="arrow"/></span>
                    </div>
                </div>
            </div>
            <div className={`${s.headerRow} ${s.gridContainer}`}>
                <div className={s.subtitle}>Описание</div>
                <div className={s.subtitle}>Категория</div>
                <div className={s.subtitle}>Дата</div>
                <div className={s.subtitle}>Сумма</div>
                <div className={s.subtitle}></div>
            </div>
            <div className={s.expenseContainer}>
                {expenses.map((expense) => (
                    <div key={expense.id} className={`${s.expenseItem} ${s.gridContainer}`}>
                        <div className={s.content}>{expense.description}</div>
                        <div className={s.content}>{expense.category}</div>
                        <div className={s.content}>{expense.date}</div>
                        <div className={s.content}>{expense.amount} ₽</div>
                        <div className={s.contentBtn}>
                            <button onClick={() => console.log(expense.id)}>
                                <img src={pen} alt="pen"/>
                            </button>
                            <button onClick={() => onDelete(expense.id)}>
                                <img src={bag} alt="bag"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
