import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from  '../../../assets/home/slide1.jpg'
import slider2 from  '../../../assets/home/slide2.jpg'
import slider3 from  '../../../assets/home/slide3.jpg'
import slider4 from  '../../../assets/home/slide4.jpg'
import slider5 from  '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle heading={"Order Online"} subHeading={"from 11:00am to 5:00pn"}>

        </SectionTitle>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className="text-4xl uppercase -mt-16 text-center text-white">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className="text-4xl uppercase -mt-16 text-center text-white">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className="text-4xl uppercase -mt-16 text-center text-white">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className="text-4xl uppercase -mt-16 text-center text-white">
              Dessert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className="text-4xl uppercase -mt-16 text-center text-white">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Category;