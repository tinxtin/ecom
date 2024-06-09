import { NavRoute } from '../route/navroute'

export const FooterNav = () => {

    function NavLink() {

        const sections = {
            Navigate: [
                'Shop',
                'About us',
                'Blog',
                'Career',
            ],
            Social: [
                'Instagram',
                'Pinterest',
                'Facebook',
                'Tiktok',
                'Youtube',
            ],
            Support: [
                'Help & FAQ',
                'Contact',
                'Return & Exchange',
                'Shipping Information',
                'Privacy',
            ],
        }

        return Object.entries(sections).map(([section, links], i) => {
            return (
                <div className='footer__nav-links' key={i}>
                    <h4 className='footer__nav-header'>
                        { section }
                    </h4>
                    <ul className='footer__nav-list'>
                        { links.map((link, i) => {
                            return (
                                <li className='footer__nav-item' key={i}>
                                    <NavRoute to='/' className={'footer__nav-link'}>
                                        { link }
                                    </NavRoute>
                                </li>
                            )
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