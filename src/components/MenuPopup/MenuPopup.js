import React from "react";
import { Link } from 'react-router-dom';

import './MenuPopup.css';

function MenuPopup({ isOpen, onClose }){
    return(
<div className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
            <button className="popup__close" onClick={onClose}></button>
            <ul className="header__mobile-list">
                <li className="header__mobile-item"><Link to='/' className="header__mobile">Главная</Link></li>
                <li className="header__mobile-item"><Link to='/movies' className="header__mobile">Фильмы</Link></li>
                <li className="header__mobile-item"><Link to='/saved-movies' className="header__mobile">Сохраненные фильмы</Link></li>
            </ul>
            <Link to='/profile' className="header__account">Aккаунт</Link>
        </div>
    </div>
    );
}

export default MenuPopup;