import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
      <div className='w-4/12 text-center mx-auto my-8'>
        <p className='text-yellow-600'>{heading}</p>
        <p className='text-4xl uppercase border-y-4'>{subHeading}</p>
      </div>
    );
};

export default SectionTitle;