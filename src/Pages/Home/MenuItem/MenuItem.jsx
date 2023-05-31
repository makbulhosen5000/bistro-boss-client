import React from 'react';

const MenuItem = ({menu}) => {
    
    return (
      <div className="flex space-x-2">
        <img src={menu?.image} alt="" style={{ borderRadius:'0 200px 200px 300px' }} className='[100px]' />
        <div>
          <h3 className="uppercase">{menu?.name}</h3>
          <p>{menu?.recipe}</p>
        </div>
        <p className='text-yellow-
        600'>${menu?.price}</p>
      </div>
    );
};

export default MenuItem;