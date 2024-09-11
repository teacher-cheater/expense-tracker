import React from 'react';
import s from './Header.module.css';
import logo from '../../images/icons/logo.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
            <img src={logo} alt="logo"/>
            <ul className={s.routes}>
                <li className={s.active}>Мои расходы</li>
                <li>Анализ расходов</li>
            </ul>
            <span className={s.burger}></span>
            <a className={s.logout} href="">Выйти</a>
        </div>
        </div>
    );
};

export default Header;
