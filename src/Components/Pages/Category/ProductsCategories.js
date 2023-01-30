import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const ProductsCategories = ({ category, stickyTopSpace }) => {
  const { image, _id, category: categoryName, description } = category;
  return (
    <>
      <div
        className={`sticky grid grid-cols-1 overflow-hidden rounded-xl bg-gray-600 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2`}
        style={{ top: stickyTopSpace }}>
        <div className="flex flex-col justify-center p-10">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl -mb-2 text-white">{categoryName}</h2>
            <p className="lg:w-3/4 text-lg text-white">{description}</p>
            <Link to={`/category/${_id}`} className="flex justify-center">
              <button type="submit" className=" flex items-center gap-2 mt-2 py-2 rounded-full text-black text-lg gradiant border-0 px-10">
                <span>See Items</span> <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[200px] md:min-h-[400px]">
          <img src={image} alt="" className="absolute inset-0 block h-full w-full object-cover" />
        </div>
      </div>
      {/* <div className="p-4 lg:w-1/3" data-aos="fade-up" data-aos-duration="1000">
        <div className="h-full bg-gray-600  px-5  pt-5 pb-24 rounded-lg overflow-hidden text-center relative">
          <img className='w-full h-[250px] shadow-xl rounded-lg mb-4' src={image} alt="" />
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{categoryName}</h1>
          <p className="leading-relaxed mb-3 text-white">{description?.slice(0, 120)}</p>



          <Link to={`/category/${_id}`} className="flex justify-center">
            <button type="submit" className=" flex items-center gap-2 mt-2 py-2 rounded-full text-black text-lg gradiant border-0 px-10">
              <span>See Items</span> <FaArrowRight />
            </button>
          </Link>




          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-white inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductsCategories;