import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainImage() {
  return (
    <div className="mb-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-64 md:h-96 lg:h-[500px]"
      >
        <SwiperSlide>
          <img
            src="https://admin.broadwaypizza.com.pk/images/banner/combo%20boxes.jpg"
            alt="Combo Boxes"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://admin.broadwaypizza.com.pk/images/banner/1280387webbannerban.jpg"
            alt="Broadway Pizza Banner"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://admin.broadwaypizza.com.pk/images/banner/web-banner-1280x387cheesy.jpg"
            alt="Cheesy Pizza Banner"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
