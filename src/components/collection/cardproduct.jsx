import { Link } from 'react-router-dom';
import { ActionBtn } from '../action/product-btn';

export const ProductCard = ({ product }) => {

    return (
        <li className='collection__products-list-item'>
                <div className='collection__item'>
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
                                    { product.name }
                                </h3>
                            </div>
                            <div className='item__desc'>
                                <div className='item__desc-wrapper'>
                                    <p className='item__desc-text'>
                                        { product.desc }
                                    </p>
                                </div>
                                <p className='item__price'>
                                    <span className='item__price-current'>
                                        £{ product.price }
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='item__info-bottom'>
                            <div className='item__action'>
                                <ActionBtn className='item__quick-add btn' name='add' qty={product.qty}/>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
    )
}