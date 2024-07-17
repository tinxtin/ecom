import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

export const NavRoute = ({ to, children, className, event}) => {
    return (
        <NavLink to={to} className={className} onClick={() => event(false)}>
            { children }
        </NavLink>
    )
}