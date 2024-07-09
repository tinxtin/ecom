import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { NavRoute } from '../route/navroute';
import { NavItem } from './navbaritem';

export const NavBar = () => {

    function NavModal({ children }) {
        
        return (
            <li className='nav__item'>
                <button type='button' onClick={OpenNavModal} className='nav__item-btn btn__link'>
                    { children }
                </button>
            </li>
        )
    }

    function OpenNavModal() {

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
        }
    ]

    return (
        <nav className='nav__container container'>
            <div className='nav__content'>
                <ul className='nav__list'>
                    { navData.map(({ label, href, children}, i) => {
                        return (
                            <NavItem key={i} {...{ label, href, children }}/>
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
                    <NavModal>
                        Search
                    </NavModal>
                    <NavModal>
                        Account
                    </NavModal>
                    <NavModal>
                        Bag (
                        <span className='bag-btn-count'>0</span>
                        )
                    </NavModal>
                </ul>
            </div>
        </nav>
    )
}