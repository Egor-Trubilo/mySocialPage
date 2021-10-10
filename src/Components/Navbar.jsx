import React from 'react';
import classesNavBar from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classesNavBar.nav}>
                    <ul className={classesNavBar.items}>
                        <li>
                            <a className={classesNavBar.item}>Profile</a>
                        </li>
                        <li>
                            <a className={classesNavBar.item}>Message</a>
                        </li>
                        <li>
                            <a className={classesNavBar.item}>Music</a>
                        </li>
                        <li>
                            <a className={classesNavBar.item}>Settings</a>
                        </li>
                    </ul>
                </nav>
    )
}

export default Navbar;