import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { NavRoute } from '../route/navroute';
import { DropDownItem } from './dropdownitem';

export const NavItem = ({ label, href, children}) => {
    return (
        <li className='nav__item'>
            <div className="nav__item-content">
                <NavRoute to={href} className={({ isActive }) => isActive ? 'nav__item-link active': 'nav__item-link'}>
                    { label }
                </NavRoute>
            </div>
            {children && 
                <div className='nav__item-dropdown'>
                        <DropDownItem sub={children}/>
                </div>}
        </li>
    )
}