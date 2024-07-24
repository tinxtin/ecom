
export const NavBag = ({ label, href }) => {

    return (
        <li className='nav__item'>
            <button type='button' className='nav__item-btn btn'>
                { label }
            </button>
        </li>
    )
}