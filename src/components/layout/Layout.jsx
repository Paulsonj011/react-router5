import React from 'react';
import Styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={Styles.main}>{props.children}</main>

        </>
    )
}

export default Layout