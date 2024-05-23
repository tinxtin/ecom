import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/pepper2.jpg'
import { Swiper, SwiperSlide } from '../../components/products/swiper';
import { Collections } from '../../utils/stock/all'

export const Home = () => {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width, height
        }
    }
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const featuredProducts = Collections.all.feature.map((item, i) => {
        return (
            <SwiperSlide>
                <li className='featured__products-list-item'>
                    <div className='featured__item'>
                        <div className='item__image-container'>
                            <Link className='item__link'>
                                <div className='item__wrapper'>
                                    <img src="https://placehold.co/600x400" alt="" className='item__image'/>
                                </div>
                            </Link>
                        </div>
                        <div className='item__info'>
                            <div className='item__info-top'>
                                <div className='item__details'>
                                    <h3 className='item__title'>
                                        { item.name }
                                    </h3>
                                </div>
                                <div className='item__desc'>
                                    <div className='item__desc-wrapper'>
                                        <p className='item__desc-text'>
                                            { item.desc }
                                        </p>
                                    </div>
                                    <p className='item__price'>
                                        <span className='item__price-current'>
                                            { item.price }
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className='item__info-bottom'>
                                <button>test</button>
                            </div>
                        </div>
                    </div>
                </li>
            </SwiperSlide>
        )
    })

    return (
        <>
            <section className='home__hero' style={{top: '-4rem', '--hero-height': windowDimensions.height / 100 + 'px', '--max-hero-height': windowDimensions.width / 200 + 'px'}}>
                <Link to={''} className='home__hero-link'>
                    <div className='home__hero-wrapper'>
                        <div className='home__hero-image'>
                            <img src={hero} alt=""/>
                        </div>
                    </div>
                </Link>
            </section>
            <section className='home__collections'>
                <div className='featured__products'>
                    <ul className='featured__products-list container'>
                        <div className='swiper__viewport swiper__draggable'>
                            <Swiper
                            slidesPerView={4}
                            breakpoints={{ 768: { slidesPerView: 4 } }}
                            >
                            { featuredProducts }
                            </Swiper>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    )
}