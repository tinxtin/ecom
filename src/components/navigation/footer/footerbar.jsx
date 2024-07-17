import { Newsletter } from '../../promotion/newsletter'
import { FooterNav } from './footerlink'

export const NavFooter = () => {

    return (
        <div className='footer__container container'>
            <div className='footer__content'>
                <FooterNav/>
                <Newsletter/>
            </div>
        </div>
    )
}