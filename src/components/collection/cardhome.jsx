import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const HomeCards = ({ collections }) => {

    return Object.values(collections).map(( keyName ) => {
        return Object.keys(keyName).map((category, i) => {
            return (
                <div className='card__container' key={i}>
                    <article className='card__category'>
                        <div className='card__wrapper'>
                            <span className='item__image-wrapper img-placeholder'>
                                <span className='item__image-overlay'></span>
                                <img className='item__image' src='https://placehold.co/600x400'/>
                            </span>
                        </div>
                        <Link className='card__category-link'>
                            <div className='card__category-title-wrapper'>
                                <h2 className='card__category-title'>
                                    { category }
                                </h2>
                            </div>
                        </Link>
                    </article>
                </div>
            )
        }) 
    })
}