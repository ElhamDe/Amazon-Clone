import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
    return (
        <div className="h-[600px] bg-white">
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                autoplay={{
                    delay: 4500
                }}
                className="h-[50%]"
            >
                <SwiperSlide>
                    <img src={"../images/carousel_1.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_2.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_4.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_5.jpg"}/>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Carousel