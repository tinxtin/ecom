import { NavRoute } from '../route/navroute'

export const Newsletter = () => {
    

    return (
        <div className='footer__newsletter'>
            <div className='footer__form-container'>
                <form action="" className='form__single-field form'>
                    <div className='footer__input-container'>
                        <div className='newsletter__email'>
                            <input type="email" name='email' aria-label='Email Address' required={true} className='newsletter__input input'/>
                            <label>Email Address</label>
                        </div>
                        <div className='newsletter__sub'>
                            <button className='newsletter__sub-btn btn'>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='footer__newsletter-privacy'>
                        <div className='newsletter__privacy-container'>
                            <div className='newsletter__privacy-content'>
                                <p className='newsletter__privacy'>
                                    <span className='newsletter__privacy-text'>
                                        You can unsubscribe anytime. For more detail, visit our{' '}
                                        <NavRoute to='/' className={'newsletter__privacy-link'}>
                                            Privacy Policy
                                        </NavRoute>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    )
}