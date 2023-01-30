import React from 'react';
import Category from '../Category/Category';
import ProductsCategories from '../Category/ProductsCategories';
import Advertise from './AdvertisedItems/Advertise';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import './Home.css';
import HomeCard from './Homecard';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {


  return (
    <div className='bg-gradient-to-r from-[#686562] to-[#444553]' >

      <Banner></Banner>
      <Category></Category>
      <Advertise></Advertise>
      {/* <Slider></Slider> */}
      <ChooseUs></ChooseUs>
      <Services></Services>
      <HomeCard></HomeCard>


    </div>
  );
};

export default Home;