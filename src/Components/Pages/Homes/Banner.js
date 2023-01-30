import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className='bg-banner-home h-[105vh]'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex relative justify-center items-center mt-28 text-center'>


        <div className='flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-3xl md:text-6xl font-bold  text-white'>Experience <span className='gap-text'>Personalized</span>  <br />We turn your Furniture
            Fantasiest to Reality!</h2>
          <h2 className='text-2xl md:text-5xl text-white  font-semibold'>for Second Hand Products</h2>
          <p className='md:text-2xl text-slate-400 '>Fully Trustable with money back guraantee with our Trustable Seller</p>
          <Link className='a'>
            <span className="btnn">
              see product
            </span>
            <div className='liquid'></div>
          </Link>
        </div>

      </div>
      <div className="flex w-[45%] text-white mt-5 effect">

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="stat-value">10K</div>
          <div className="stat-desc font-bold uppercase">Products</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc uppercase">↗︎ sellers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">

          </div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc uppercase">buyers</div>
        </div>

      </div>
    </div>
  );
};

export default Banner;