import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/pepper2.jpg'
import { Swiper } from '../../components/carousel/swiper';
import { FeaturedProducts } from '../../components/carousel/featured';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { CustomCards } from '../../components/collection/card';
import { Collections } from '../../utils/stock/all';
import { useWindowDimensions } from '../../components/window/dimensions';

export const Home = () => {

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
            </section>
            <section className='home__carousel'>
                <div className='featured__products'>
                    <ul className='featured__products-list container'>
                        <div className='swiper__viewport swiper__draggable'>
                            <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            slidesPerView={4}
                            breakpoints={{ 768: { slidesPerView: 4 } }}
                            navigation={true}
                            spaceBetween={12}
                            scrollbar={{
                                hide: true,
                            }}
                            injectStyles={[`
                                .swiper-button-next,
                                .swiper-button-prev {
                                    background-color: rgb(255, 255, 255);
                                    color: rgb(0, 0, 0);
                                    width: 1.1875em;
                                    height: 1.125em;
                                }

                                .swiper-button-next svg,
                                .swiper-button-prev svg {
                                    width: 50%;
                                    height: 50%;
                                }

                                .swiper-pagination {
                                    position: relative !important;
                                    margin-top: 1rem;
                                    bottom: 0 !important;
                                }

                                .swiper-pagination-bullet-active {
                                    background-color: rgb(0, 0, 0);
                                }
                            `]}
                            >
                            <FeaturedProducts collections={Collections}/>
                            </Swiper>
                        </div>
                    </ul>
                </div>
            </section>
            <section className='home__collection'>
                <div className='home__collection-grid container'>
                    <CustomCards collections={Collections}/>
                    <button></button>
                </div>
            </section>
        </>
    )
}