import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef, useContext  } from 'react';
import { NavRoute } from '../../../route/navroute';
import { NavMobile } from '../mobile/navmobile';
import { NavDesktop } from './navdesktop';
import { NavSearch } from '../utilities/search/navsearch';
import { NavAccount } from '../utilities/navaccount';
import { NavBag } from '../utilities/navbag';
import { Menu } from '@mui/icons-material';
import { Close } from '@mui/icons-material';

export const Nav = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [clicked, setClicked] = useState(null);

    const handleToggle = (idx) => {
        if (clicked === idx) {
            return setClicked(null);
        }
        setClicked(idx);
    };

    function NavModal({ children }) {
        
        return (
            <li className='nav__item'>
                <button type='button' onClick={OpenNavModal} className='nav__item-btn btn__link'>
                    { children }
                </button>
            </li>
        )
    }

    const navData = [
        {
            label: 'Shop',
            href: '/collection/all',
            children: [
                {
                    heading: 'dropdown content',
                    submenu: [
                        {
                            label: 'test1',
                            href: '#',
                        },
                        {
                            label: 'test2',
                            href: '#',
                        },
                        {
                            label: 'test3',
                            href: '#',
                        },
                        {
                            label: 'test4',
                            href: '#',
                        },
                        {
                            label: 'test5',
                            href: '#',
                        },
                        {
                            label: 'test6',
                            href: '#',
                        },
                        {
                            label: 'test7',
                            href: '#',
                        },
                    ]
                }
            ]
        },
        {
            label: 'About',
            href: '/about'
        },
    ]

    const navUtil = [
        {
            label: 'Search',
            href: '#',
        },
        {
            label: 'Account',
            href: '#',
        },
        {
            label: 'Bag',
            href: '#',
        },

    ]

    return (
        <nav className='nav__container container'>
            <div className='nav__content hide__desktop'>
                <button type='button' className={`nav__mobile-btn btn ${!isDrawerOpen && 'active'}`} onClick={() => setIsDrawerOpen((prev) => !prev)}>
                    {!isDrawerOpen && <Menu />}
                </button>
                <button type='button' className={`nav__mobile-btn btn ${isDrawerOpen && 'active'}`} onClick={() => setIsDrawerOpen((prev) => !prev)}>
                    {isDrawerOpen && <Close />}
                </button>
                <NavMobile  {... { navData, isDrawerOpen, setIsDrawerOpen, clicked, handleToggle }}/>
            </div>
            <div className='nav__content hide__mobile'>
                <ul className='nav__list'>
                    { navData.map(({ label, href, children }, i) => {
                        return (
                            <NavDesktop key={i} {...{ label, href, children }}/>
                        )
                    })}
                </ul>
            </div>
            <div className='nav__content'>
                <NavRoute to='/'>
                    Logo
                </NavRoute>
            </div>
            <div className='nav__content'>
                <ul className='nav__list'>
                    { navUtil.map(({ label, href }, i) => {
                        if (label.toLowerCase() === 'search') {
                            return (
                                <NavSearch key={i} {...{ label }}/>
                            )
                        } else if ( label.toLowerCase() === 'account') {
                            return (
                                <NavAccount key={i} {...{ label, href }}/>
                            )
                        } else {
                            return (
                                <NavBag key={i} {...{ label, href }}/>
                            )
                        }
                    })}
                </ul>
            </div>
        </nav>
    )
}