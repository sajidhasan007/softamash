import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';



SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
    return (
        <div className="container">
            <div className="title_wrapper">
                <h1 className="swper-title">Our Sample Work</h1>
                {/*  <div className="reactLogo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbQgRa0RS1EpJSQ1hCenRLXSGGflhNEOuuQ&usqp=CAU" />
                </div> */}
                <div className="title_">
                    <span>React</span>Swiper Slider
                </div>
            </div>
            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-img-contain'>
                    <img className='swiper-img' src={carousel1} />
                </SwiperSlide>
                <SwiperSlide className='swiper-img-contain'>
                    <img className='swiper-img' src={carousel2} />
                </SwiperSlide>
                <SwiperSlide className='swiper-img-contain'>
                    <img className='swiper-img' src={carousel3} />
                </SwiperSlide>
                <SwiperSlide className='swiper-img-contain'>
                    <img className='swiper-img' src={carousel4} />
                </SwiperSlide>
                <SwiperSlide className='swiper-img-contain'>
                    <img className='swiper-img' src={carousel5} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}