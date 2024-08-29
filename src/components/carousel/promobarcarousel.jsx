import { Swiper, SwiperSlide } from './swiper';
import { Autoplay } from 'swiper/modules';


export const PromoCarousel = ({ barData }) => {

    barData.map((i) => console.log(i.value))

    return (
        <div className='swiper__viewport'>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >   
            {barData.map((promo, i) => <SwiperSlide key={i}><p>{promo.value}</p></SwiperSlide>)}
            </Swiper>
        </div>
    )
}