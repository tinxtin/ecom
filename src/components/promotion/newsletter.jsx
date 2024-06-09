

export const Newsletter = () => {
    

    return (
        <div className='footer__newsletter'>
            <div className='footer__form-container'>
                <p className='footer__newsletter-text'>
                    Placeholder text
                </p>
                <div style={{width: '100%'}}>
                    <form action="" className='form__single-field form'>
                        <div className='input__container'>
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
                    </form>
                </div>
            </div>
        </div>
    )
}