import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const FeaturedItem = () => {
    return (
      <div className="featured-item bg-fixed text-white">
        <SectionTitle
          heading="check-it out"
          subHeading="Feature Item"
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-4 pb-20 pt-12 px-36">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="">
            <p>Aug 20,2023</p>
            <p className="uppercase">Where can I get some?</p>
            <p className="md:ml-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, officia unde. Alias vitae iusto tempore ullam
              dolorum culpa. Et dolore magnam porro, ad, voluptatibus
              necessitatibus provident consectetur voluptas distinctio facere
              accusantium, tempora cum expedita explicabo minima obcaecati minus
              a earum at. Aliquam porro nostrum architecto inventore tenetur
              debitis possimus facere.
            </p>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FeaturedItem;