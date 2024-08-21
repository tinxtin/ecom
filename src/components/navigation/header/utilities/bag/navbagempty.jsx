import { NavRoute } from '../../../../route/navroute'
import { RecsCarousel } from '../../desktop/recscarousel'
import { Collections } from '../../../../../utils/stock/all'

export const BagEmpty= () => {
    
    return (
        <>
            <h3 className='bag__empty-msg'>
                Your bag is empty.
                <br />
                Explore our categories!
            </h3>
            <div className='bag__shop-wrapper'>
                <NavRoute 
                    to={'/collection/all'}
                    className={'bag__shop-all btn'}
                    >
                    Shop All
                </NavRoute>
            </div>
            <div className='bag__recs'>
                <h3 className='bag__recs-header'>
                    You may also like
                </h3>
                <div className='bag__swiper'>
                    <RecsCarousel setPerSlides={1} collections={Collections}/>
                </div>
            </div>
        </>
    )
}