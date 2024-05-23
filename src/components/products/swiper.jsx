import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

export const Swiper = (props) => {

	const swiperRef = useRef(null);
	const { children, ...rest } = props;

	useEffect(() => {
		register();

		const slideParams = { ...rest };

		Object.assign(swiperRef.current, slideParams);
		swiperRef.current.initialize();
	}, [])

	return (
		<swiper-container ref={swiperRef} init='false' class='swiper__slider'>
			{ children }
		</swiper-container>
	)
}

export const SwiperSlide = (props) => {

	const { children, ...rest } = props;
	
	  return (
		<swiper-slide {...rest}>
		  {children}
		</swiper-slide>
	  );
}
