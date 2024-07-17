import React from 'react';
import { Link } from 'react-router-dom';

export const NavMobileContent = ({ sub }) => {
    return (
        <div className='dropdown__content'>
            {sub.map((item, i) => (
                <React.Fragment key={i}>
                    <ul className='dropdown__content-list'>
                        {item.submenu.map(({ label, href }, index) => (
                            <li key={index}>
                                <Link to={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>   
                </React.Fragment>
            ))}
        </div>
    )
}