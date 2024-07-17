import { NavMobileItem } from './navmobileitem'
import { Close } from '@mui/icons-material';


export const NavMobile = ({ navData, isDrawerOpen, setIsDrawerOpen }) => {
    
    return (
        <div className='nav__mobile'>
            <div className={`nav__mobile-container container ${isDrawerOpen && 'active'}`}>
                <ul className='nav__mobile-list'>
                    { navData.map(({ label, href, children}, i) => {
                        return (
                            <NavMobileItem key={i} {...{ label, href, children, isDrawerOpen }}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}