import { useState, useEffect, useRef, useContext  } from 'react';
import { NavCarousel } from './navcarousel';
import { NavRoute } from '../../../route/navroute';
import { NavHoverContext } from '../../../statecontrol/navhovercontext';

export const NavDesktop = ({ label, href, children }) => {

    const setIsNavHovered = useContext(NavHoverContext)

    return (
        <li className='nav__item'>
            <NavRoute 
                to={href}
                className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}
                >
                { label }
            </NavRoute>
                {children &&
                    <div className='nav__item-dropdown' onMouseOver={() => setIsNavHovered(true)} onMouseOut={() => setIsNavHovered(false)}>
                        <NavCarousel sub={children}/>
                    </div>
                }
        </li>
    )
}