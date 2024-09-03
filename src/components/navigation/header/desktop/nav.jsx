import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef, useContext  } from 'react';
import { SiteRoute } from '../../../route/siteroute';
import { NavMobile } from '../mobile/navmobile';
import { NavDesktop } from './navdesktop';
import { NavSearch } from '../utilities/search/navsearch';
import { NavAccount } from '../utilities/navaccount';
import { NavBag } from '../utilities/bag/navbag';
import { Menu, Close } from '@mui/icons-material';

export const Nav = ({ navData, navUtil}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [clicked, setClicked] = useState(null);

    const handleToggle = (idx) => {
        if (clicked === idx) {
            return setClicked(null);
        }
        setClicked(idx);
    };

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
                <SiteRoute to='/'>
                    Logo
                </SiteRoute>
            </div>
            <div className='nav__content'>
                <ul className='nav__list'>
                    { navUtil.map(({ label }, i) => {
                        if (label.toLowerCase() === 'search') {
                            return (
                                <NavSearch key={i} {...{ label }}/>
                            )
                        } else if ( label.toLowerCase() === 'account') {
                            return (
                                <NavAccount key={i} {...{ label }}/>
                            )
                        } else {
                            return (
                                <NavBag key={i} {...{ label }}/>
                            )
                        }
                    })}
                </ul>
            </div>
        </nav>
    )
}