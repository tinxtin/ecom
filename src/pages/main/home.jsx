import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/pepper2.jpg'
import { Swiper } from '../../components/carousel/swiper';
import { featuredProducts } from '../../components/carousel/featured';

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