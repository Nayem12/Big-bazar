import { useQuery } from '@tanstack/react-query';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsCategories from './ProductsCategories';
import Spinner from '../../../hooks/Spinner';
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const stickyTopSpace = 50;

  useEffect(() => {
    setDataLoading(true)
    axios.get('http://localhost:5000/categories')
      .then((res) => {
        setCategories(res?.data)
        setDataLoading(false)
      })
  }, [])


  return (
    <div className='mt-[50px]'>
      <section className="text-gray-600 body-font">
        {dataLoading &&
          <Spinner />
        }
        <h2 className='hero-text'>Product by <span className='gap-text'>category</span> </h2>
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="flex flex-wrap -m-4">


            {
              categories.map(category => <ProductsCategories
                key={category._id}
                category={category}
              ></ProductsCategories>)
            }



          </div> */}
          <div className="space-y-20">
            {categories.map((category, index) => (
              <ProductsCategories key={category.id} category={category} stickyTopSpace={stickyTopSpace * (index + 1)}></ProductsCategories>
            ))}
          </div>
        </div>
      </section>







    </div>
  );
};

export default Category;