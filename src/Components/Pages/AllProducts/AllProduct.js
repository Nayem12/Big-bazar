import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Allproduct.css'

const AllProduct = ({ allproduct }) => {
    const { category,
        image,
        description,
        discountPercentage,
        price,
        title,
        brand,
        color,
        condition,
        purchaseyear,
        Location,
        availibilty,
        postdate,
        sellername, resolution, verification, originalprice
    } = allproduct
    return (
        <div>
            <div className="card card-side bg-gray-600 shadow-xl producteffect hover:bg-[#2e815d] cursor-pointer">

                <div className="card-body  text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                        <button type="submit" className=" flex items-center gap-2 mt-2 py-2 rounded-full text-black text-lg gradiant border-0 px-10">
                            <span>See Items</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
                <figure className='p-3'>
                    <img className='rounded-lg w-[220px] h-[200px] shadow-md' src={image} alt="Movie" />
                </figure>
            </div>
        </div>
    );
};

export default AllProduct;