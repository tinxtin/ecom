import { useState, useEffect, useRef, useContext  } from 'react';
import { NavCarousel } from './navcarousel';
import { SiteRoute } from '../../../route/siteroute';
import { NavHoverContext } from '../../../statecontrol/navhovercontext';

export const NavDesktop = ({ label, use, href, children }) => {

    console.log(use)

    const setIsNavHovered = useContext(NavHoverContext)

    return (
        <li className='nav__item'>
            <SiteRoute 
                to={href}
                className={'nav__item-link'}
                >
                { label }
            </SiteRoute>
                {children &&
                    <div className='nav__item-dropdown' onMouseOver={() => setIsNavHovered(true)} onMouseOut={() => setIsNavHovered(false)}>
                        <NavCarousel sub={children}/>
                    </div>
                }
        </li>
    )
}