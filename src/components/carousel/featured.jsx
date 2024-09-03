import { SwiperSlide } from './swiper';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActionBtn } from '../action/product-btn';
import { ProductCard } from '../collection/cardproduct';

export const FeaturedProducts = ({ collections }) => {

    let featured = []
    Object.values(collections).map(arr => {
        for (const value of Object.values(arr)) {
            value.forEach(item => {
                if (item.inFeature === true) {
                    featured.push(item)
                }
            })
        }
    })

    return featured.map(( product, i ) => {
        return (
            <SwiperSlide key={i}>
                <ProductCard {...{ product }}/>
            </SwiperSlide>
        )
    })
}
