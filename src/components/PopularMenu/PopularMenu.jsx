import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from '../../Pages/Home/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
   
    return (
      <section className="mb-12">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {popular.map((menu) => (
            <MenuItem key={menu._id} menu={menu} />
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 ">
          View Full Menu
        </button>
      </section>
    );
};

export default PopularMenu;