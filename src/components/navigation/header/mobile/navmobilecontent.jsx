import React from 'react';
import { Link } from 'react-router-dom';

export const NavMobileContent = ({ sub, setIsDrawerOpen }) => {
    return (
        <>
            {sub.map((item, i) => (
                <React.Fragment key={i}>
                    <ul className='nav__mobile-dropdown-list'>
                        {item.submenu.map(({ label, href }, index) => (
                            <li 
                                className='nav__mobile-dropdown-item'
                                key={index}
                                onClick={() => {
                                    setIsDrawerOpen && setIsDrawerOpen(false)
                                }}
                                >
                                <Link className='nav__dropdown-link' to={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>   
                </React.Fragment>
            ))}
        </>
    )
}