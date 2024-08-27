import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/pepper2.jpg'
import { HomeCards } from '../../components/collection/cardhome';
import { RecsCarousel } from '../../components/navigation/header/desktop/recscarousel';
import { useWindowDimensions } from '../../components/window/dimensions';
import { PromoBlock } from '../../components/promotion/promoblock';

export const Home = ({ Collections }) => {

    const { height, width } = useWindowDimensions();

    return (
        <>
            <section className='home__hero' style={{top: '-4rem', '--hero-height': height / 100 + 'px', '--max-hero-height': width / 200 + 'px'}}>
                <Link to={''} className='home__hero-link'>
                    <div className='home__hero-wrapper'>
                        <div className='home__hero-image'>
                            <img src={hero} alt=""/>
                        </div>
                    </div>
                </Link>
                <div className='home__hero-promo'>
                    <PromoBlock setClass={'home'}/>
                </div>
            </section>
            <section className='home__carousel'>
                <div className='featured__products'>
                    <ul className='featured__products-list container'>
                        <RecsCarousel setLoop={true} setPerSlides={4} collections={Collections}/>
                    </ul>
                </div>
            </section>
            <section className='home__collection'>
                <div className='home__collection-grid container'>
                    <HomeCards collections={Collections}/>
                    <button></button>
                </div>
            </section>
        </>
    )
}