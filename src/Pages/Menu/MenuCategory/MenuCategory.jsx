import React from 'react';
import MenuItem from '../../Home/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
      <div>
        {title && <Cover img={img} title={title} />}
        <div className="grid md:grid-cols-2 gap-4 py-5">
          {items.map((menu) => (
            <MenuItem key={menu._id} menu={menu} />
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-5">
            Order
          </button>
        </Link>
      </div>
    );
};

export default MenuCategory;