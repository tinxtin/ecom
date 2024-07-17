import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef  } from 'react';
import { NavRoute } from '../route/navroute';
import { NavMobileContent } from './navmobilecontent';
import { useWindowDimensions } from '../window/dimensions';

export const NavMobileItem= ({ label, href, children, isDrawerOpen }) => {
    
    const { width } = useWindowDimensions();

    return (
        <li className='nav__mobile-item'>
            <NavRoute to={href} className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                { label }
            </NavRoute>
            {children && isDrawerOpen &&
                <div className='nav__mobile-dropdown'>
                    <NavMobileContent sub={children}/>
                </div>
            }
        </li>
    )
}