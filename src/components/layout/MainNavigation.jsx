import React from 'react'
import { NavLink } from 'react-router-dom';
import Styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>Great Quotes</div>
            <nav className={Styles.nav}>
                <ul>
                    <li> <NavLink to='/quotes' activeClassName={Styles.active}>All Quotes</NavLink> </li>
                </ul>
                <ul>
                    <li> <NavLink to='/new-quote' activeClassName={Styles.active}>Add a Quote</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation