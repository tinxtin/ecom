import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const CustomCards = ({ shop }) => {
    return shop.map(( item, i) => {
        return (
            <div className='card__container' key={i}>
                <article className='card__product'>
                    <div className='card__wrapper'>
                        <span className='item__image-wrapper img-placeholder'>
                            <span className='item__image-overlay'></span>
                            <img className='item__image' src='https://placehold.co/600x400'/>
                        </span>
                    </div>
                    <Link className='card__product-link'>
                        <div className='card__product-title-wrapper'>
                            <h2 className='card__product-title'>
                                { item.category }
                            </h2>
                        </div>
                    </Link>
                </article>
            </div>
        )
    })
}