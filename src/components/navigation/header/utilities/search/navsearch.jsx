import { useState, useEffect, useRef, useContext  } from 'react';
import { SearchContext } from '../../../../statecontrol/searchcontext';

export const NavSearch = ({ label, href }) => {
    
    const setSearchContext = useContext(SearchContext)

    return (
        <li className='nav__item'>
            <button type='button' className='nav__item-btn btn' onClick={() => setSearchContext((prev) => !prev)}>
                { label }
            </button>
        </li>
    )
}