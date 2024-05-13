import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

function NavBar() {

    function NavRoute({ to, children}) {
    
        return (
            <li className='nav__item' >
                <NavLink to={to} className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                    { children }
                </NavLink>
            </li>
        )
    }

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
                    <NavRoute to='/collection/all'>
                        Shop
                    </NavRoute>
                    <NavRoute to='/about'>
                        About
                    </NavRoute>
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

export default NavBar;