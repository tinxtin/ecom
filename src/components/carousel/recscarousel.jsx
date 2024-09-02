import { SwiperSlide, Swiper } from './swiper';
import { FeaturedProducts } from './featured';

export const RecsCarousel = ({ setPerSlides, collections, setLoop }) => {
    
    return (
        <div className='swiper__viewport swiper__draggable'>
            <Swiper
                key={setPerSlides}
                slidesPerView={setPerSlides}
                spaceBetween={12}
                loop={setLoop}
            >
            <FeaturedProducts collections={collections} />
            </Swiper>
        </div>
    )}