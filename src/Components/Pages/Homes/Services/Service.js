import React from 'react';

const Service = ({ service }) => {
    const { image, name, details } = service
    return (
        <div className='flex gap-6 m-5'>
            <div className='w-[150px]'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='text-white'>
                <h1 className='font-bold mb-3'>{name}</h1>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Service;