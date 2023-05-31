import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
    return (
      <section className="my-20">
        <SectionTitle
          heading={"Testimonials"}
          subHeading={"What our client Say"}
        ></SectionTitle>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='flex flex-col items-center mx-24 my-16'>
                <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                />
                <p className='my-10'>{review.details}</p>
                <p className='text-2xl text-orange-600 text-center'>{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonials;