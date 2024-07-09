import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from '../carousel/swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

export const DropDownItem = ({ sub }) => {
    console.log(sub)
    return (
        <div className='dropdown__content'>
            {sub.map((item, i) => (
                <React.Fragment key={i}>
                    <ul className='dropdown__content-list'>
                        <div className='swiper__viewport swiper__draggable'>
                            <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={55}
                            >
                                    {item.submenu.map(({ label, href }, i) => (
                                        <SwiperSlide>
                                            <li className='dropdown__content-item' key={i}>
                                                <div className='dropdown__image-wrapper'>
                                                    <Link className='dropdown__link' to={href}>
                                                        <img src="https://placehold.co/196x196" alt="" sizes='200px' className='dropdown__image item__image'/>
                                                        <span className='dropdown__header'>{label}</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </ul>   
                </React.Fragment>
            ))}
        </div>
    )
}