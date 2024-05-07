import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

function NavBar() {

    function CustomRoute({ to, children}) {
    
        return (
            <li className='nav__item' >
                <NavLink to={to} className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                    {children}
                </NavLink>
            </li>
        )
    }

    return (
        <nav className='nav__container container'>
            <div className='nav__content'>
                <ul className='nav__list'>
                    <CustomRoute to='/collection/all'>
                        Shop
                    </CustomRoute>
                    <CustomRoute to='/about'>
                        About
                    </CustomRoute>
                </ul>
            </div>
            <div className='nav__content'>

            </div>
            <div className='nav__content'>

            </div>
        </nav>
    )
}

export default NavBar;