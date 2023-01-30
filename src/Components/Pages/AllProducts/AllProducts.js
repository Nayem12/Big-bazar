import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../hooks/Spinner';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const { data: allproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['allproducts'],
        queryFn: () => fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Spinner />
    }
    console.log(allproducts);
    return (
        <div className='text-white body-font bg-[#02132b] mt-[-100px] pb-[150px]'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='grid grid-cols-2 gap-6 w-[90%] mx-auto'>
                {
                    allproducts?.map(allproduct => <AllProduct
                        key={allproduct._id}
                        allproduct={allproduct}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;