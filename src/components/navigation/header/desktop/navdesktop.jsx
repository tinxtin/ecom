import { NavCarousel } from './navcarousel';
import { NavRoute } from '../../../route/navroute';

export const NavDesktop = ({ label, href, children, setNavIsHovered }) => {

    return (
        <li className='nav__item'>
            <NavRoute 
                to={href}
                className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}
                >
                { label }
            </NavRoute>
                {children &&
                    <div className='nav__item-dropdown' onMouseOver={() => setNavIsHovered(true)} onMouseOut={() => setNavIsHovered(false)}>
                        <NavCarousel sub={children}/>
                    </div>
                }
        </li>
    )
}