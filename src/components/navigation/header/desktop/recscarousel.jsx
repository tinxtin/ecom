import { SwiperSlide, Swiper } from '../../../carousel/swiper';
import { FeaturedProducts } from '../../../carousel/featured';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

export const RecsCarousel = ({ setPerSlides, collections, setLoop }) => {
    
    return (
        <div className='swiper__viewport swiper__draggable'>
            <Swiper
                key={setPerSlides}
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={setPerSlides}
                spaceBetween={12}
                loop={setLoop}
                // scrollbar={{
                //     hide: true,
                //     draggable: false,
                // }}
                // injectStyles={[`
                //         .swiper-button-next,
                //         .swiper-button-prev {
                //             background-color: rgb(255, 255, 255);
                //             color: rgb(0, 0, 0);
                //             width: 1.1875em;
                //             height: 1.125em;
                //         }

                //         .swiper-button-next svg,
                //         .swiper-button-prev svg {
                //             width: 50%;
                //             height: 50%;
                //         }

                //         .swiper-pagination {
                //             position: relative !important;
                //             margin-top: 1rem;
                //             bottom: 0 !important;
                //         }

                //         .swiper-pagination-bullet-active {
                //             background-color: rgb(0, 0, 0);
                //         }

                //         // .swiper-scrollbar {
                //         //     pointer-events: none; 
                //         //     bottom: -2px !important;
                //         //     left: 0px !important;
                //         //     width: 100% !important;
                //         // }
                //     `]}
            >
                <FeaturedProducts collections={collections} />
            </Swiper>
        </div>
    )}