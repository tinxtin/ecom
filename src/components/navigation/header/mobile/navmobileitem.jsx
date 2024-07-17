import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef, act  } from 'react';
import { NavRoute } from '../../../route/navroute';
import { NavMobileContent } from './navmobilecontent';
import { useWindowDimensions } from '../../../window/dimensions'
import { Add, Remove } from '@mui/icons-material';

export const NavMobileItem= ({ label, href, children, isDrawerOpen, setIsDrawerOpen, onToggle, active }) => {
    
    const { width } = useWindowDimensions();

    return (
        <li className='nav__mobile-item'>
            <div className='nav__mobile-link'>
                <NavRoute
                    to={href}
                    className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}
                    event={setIsDrawerOpen}
                    >
                    { label }
                </NavRoute>
                {children && (
                    <button
                        className='nav__mobile-toggle btn'
                        onClick={onToggle}
                    >
                        { active ? (
                            <Remove className=''/>
                        ) : (
                            <Add className=''/>
                        )}
                    </button>
                )}
            </div>
            {children && isDrawerOpen &&
                <div 
                    className={`nav__mobile-dropdown ${active && 'expand'}`}
                >
                    <NavMobileContent sub={children} setIsDrawerOpen={setIsDrawerOpen}/>
                </div>
            }
        </li>
    )
}