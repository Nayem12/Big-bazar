import React from 'react';

const AdvertiseItems = ({ items }) => {

  const { advertise, availibility, category, condition, description, email, location, originalprice, phone, postdate, price, purchaseyear, title, image
  } = items;
  console.log(items);
  return (
    <>
      <div className="card lg:card-side bg-gray-600 shadow-xl">
        <figure className=''>
          <img src={image} alt="blog" /></figure>
        <div className="card-body">
          <h2 className="card-title"><span className="text-white ">
            {title}
          </span></h2>
          <div className='flex justify-between text-white'>

            <h2>Category : </h2>
            <h2> {category} </h2>

          </div>
          <div className='flex justify-between text-white'>
            <h1>Price : </h1>      <p className="text-white  font-bold text-lg">
              $ {price}
            </p>
          </div>
          <div className='flex items-center justify-between text-white'>
            <p className='text-xs'>       Post Date : </p>
            <p className='text-xs'>  {postdate}</p>
          </div>
          <div>
            <p className="leading-relaxed text-white mt-2 border-t">{description}</p>
          </div>
        </div>
      </div>
      {/* <div className="p-4 flex  mx-auto">
        <div className="h-full border-2 border-gray-200 border-opacity-60 bg-gray-600 rounded-lg overflow-hidden">
          <img className="h-72 w-[400px] object-cover object-center" src={image} alt="blog" />


          <div className="p-6 ">

            <div className="flex items-center  justify-between text-white  ">
              <h1>Product Name : </h1>
              <span className="text-white ">
                {title}
              </span>
            </div>
            <div className='flex justify-between text-white'>

              <h2>Category : </h2>
              <h2> {category} </h2>

            </div>

            <div className='flex justify-between text-white'>
              <h1>Price : </h1>      <p className="text-white  font-bold text-lg">
                $ {price}
              </p>
            </div>


            <div className='flex items-center justify-between text-white'>
              <p className='text-xs'>       Post Date : </p>
              <p className='text-xs'>  {postdate}</p>
            </div>
            <div>
              <p className="leading-relaxed text-white mt-2 border-t">{description}</p>
            </div>

          </div>
        </div>


      </div > */}
    </>

  );
};

export default AdvertiseItems;