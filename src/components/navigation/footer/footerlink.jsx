import { NavRoute } from '../../route/navroute';
import { Instagram, Facebook, Pinterest, YouTube } from '@mui/icons-material/';

export const FooterNav = () => {

    function NavLink() {

        const sections = {
            Navigate: [
                {
                    label: 'Shop',
                },
                {
                    label: 'About us',
                },
                {
                    label: 'Blog',
                },
                {
                    label: 'Career',
                },
            ],
            Social: [
                {
                    label: 'Instagram',
                    icon: <Instagram className='footer__nav-icon'/>,
                },
                {
                    label: 'Pinterest',
                    icon: <Pinterest className='footer__nav-icon'/>,
                },
                {
                    label: 'Facebook',
                    icon: <Facebook className='footer__nav-icon'/>,
                },
                {
                    label: 'TikTok',
                    icon: '',
                },
                {
                    label: 'Youtube',
                    icon: <YouTube className='footer__nav-icon'/>,
                },
            ],
            Support: [
                {
                    label: 'Help & FAQ',
                },
                {
                    label: 'Contact',
                },
                {
                    label: 'Return & Exchange',
                },
                {
                    label: 'Shipping Information',
                },
                {
                    label: 'Privacy',
                },
            ],
        }

        return Object.entries(sections).map(([section, sub], i) => {
            return (
                <div className='footer__nav-links' key={i}>
                    <h4 className='footer__nav-header'> 
                        { section }
                    </h4>
                    <ul className='footer__nav-list'>
                        { sub.map((link, i) => {
                            if ( link.icon ) {
                                return (
                                    <li className='footer__nav-item' key={i}>
                                        <NavRoute to='/' className='footer__nav-link'>
                                            { link.icon }
                                            <span className='footer__nav-label'>{ link.label }</span>
                                        </NavRoute>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className='footer__nav-item' key={i}>
                                        <NavRoute to='/' className={'footer__nav-link'}>
                                            { link.label }
                                        </NavRoute>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            )
        })

    }

    return (
        <div className='footer__nav'>
            <nav className='footer__nav-container'>
                <NavLink/>
            </nav>
        </div>
    )
}