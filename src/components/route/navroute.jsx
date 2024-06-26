import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

export const NavRoute = ({ to, children, className}) => {
    console.log(className)
    return (
        <NavLink to={to} className={className}>
            { children }
        </NavLink>
    )
}