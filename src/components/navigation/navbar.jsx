import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { NavRoute } from '../route/navroute';
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

    return (
        <nav className='nav__container container'>
            <div className='nav__content'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavRoute to='/collection/all' className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                            Shop
                        </NavRoute>
                    </li>
                    <li className='nav__item'>
                        <NavRoute to='/about' className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                            About
                        </NavRoute>
                    </li>
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