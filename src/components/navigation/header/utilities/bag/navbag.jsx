import { useContext } from 'react'
import { BagContext } from '../../../../statecontrol/bagcontext'
import { ItemBagContext } from '../../../../statecontrol/itembagcontext'

export const NavBag = ({ label, href }) => {

    const setBagContext = useContext(BagContext)
    const itemsInBag = useContext(ItemBagContext)

    return (
        <li className='nav__item'>
            <button type='button' className='nav__item-btn btn' onClick={() => setBagContext(true)}>
                { ` ${label} ` }
                <span className='bag__count'>
                    { `(${itemsInBag.length})` }
                </span>
            </button>
        </li>
    )
}