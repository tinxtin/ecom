import { Swiper, SwiperSlide } from './swiper';
import { Autoplay } from 'swiper/modules';


export const PromoCarousel = ({ barData }) => {

    return (
        <div className='swiper__viewport'>
            <Swiper
                key={barData}
                slidesPerView={1}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >   
            {barData.map((promo, i) => <SwiperSlide key={i}><p>{promo.value}</p></SwiperSlide>)}
            </Swiper>
        </div>
    )
}