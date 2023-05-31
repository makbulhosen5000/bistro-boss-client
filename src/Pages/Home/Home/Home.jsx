import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../../components/PopularMenu/PopularMenu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner />
        <Category />
        <PopularMenu />
        <FeaturedItem />
        <Testimonials />
      </div>
    );
};

export default Home;