import { SwiperSlide } from './swiper';
import { Link } from 'react-router-dom';
import { Collections } from '../../utils/stock/all';
import { ActionBtn } from '../action/product-btn';

export const featuredProducts = Collections.all.feature.map((item, i) => {
    return (
        <SwiperSlide key={i}>
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
                                        £{ item.price }
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='item__info-bottom'>
                            <div className='item__action'>
                                <ActionBtn className='item__quick-add' name='add' inStock={item.inStock}/>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </SwiperSlide>
    )
})