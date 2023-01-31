import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import BookingModal from '../../../Shared/BookingModal';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { MdVerified } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import toast from 'react-hot-toast';



const Product = ({ product, refetch }) => {
  const [modalitems, setModalitems] = useState(null)
  const { user } = useContext(AuthContext);
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
  } = product;
  const buyeremail = user?.email;
  const productId = product?._id;
  const newProducts = { ...product, buyeremail, productId }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddToWishList = () => {
    if (user?.email) {
      fetch(`https://big-bazar-server.vercel.app/addtowishlist`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newProducts)
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Successfully added to Wishlist')
        })
    }


  }




  return (
    <div className=" p-4">
      <div className="border bg-gray-600 shadow-[#353d3750] shadow-xl p-6 rounded-lg">
        <img className="h-[350px] rounded w-full object-cover object-center mb-6" src={image} alt="content" />
        <h3 className="tracking-widest text-emerald-800 text-xs font-medium title-font">Category : {category}</h3>
        <div className='mb-5  border-spacing-12 border-b pb-5 border-slate-400'>
          <h2 className="text-lg text-gray-900 font-medium title-font ">{title}</h2>
          <div className='flex gap-3'>
            <p className='text-xs'>Posted on {postdate},</p>
            <p className='text-xs'> {Location}</p>
          </div>
        </div>


        <div className='mb-3 flex justify-between items-center '>
          <div className=''>      <h2 className='text-[#1fee4c] font-bold text-xl'>Resale Price : ${price}</h2>
            <p>For sale by <strong>{sellername}    {verification && <span className="badge border-0 bg-[#0087bd2f] py-3"><MdVerified className='text-lg text-blue-600' /></span>}
            </strong></p></div>

          <div>
            <button
              onClick={() => handleAddToWishList(product)}
              className='btn-outline text-white chng-clr text-xs btn btn-sm'>
              <BsFillCartPlusFill className='text-2xl mr-2' />
              WishList
            </button></div>

        </div>

        <div className='my-4'>
          <div>
            <h1 className='flex justify-between '><span>Condition : </span> <span>{condition}</span></h1>
          </div>
          <div>
            <h1 className='flex justify-between '><span>Brand : </span> <span>{brand}</span></h1>
          </div>
          <div>
            <h1 className='flex justify-between '><span>Color : </span> <span>{color}</span></h1>
          </div>
          <div>
            <h1 className='flex justify-between '><span>Purchase Year : </span> <span>{purchaseyear}</span></h1>
          </div>
          <div>
            <h1 className='flex justify-between '><span>Camera Resolution  : </span> <span>{resolution}</span></h1>
          </div>
          <div>
            <h1 className='flex justify-between '><span>Original Price  :  </span> <span> <strong>${originalprice}</strong> </span></h1>
          </div>




        </div>

        <div>
          <h2 className='font-bold'>Features</h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>


        <div className='mt-5'>
          <label
            onClick={() => setModalitems(product)}
            htmlFor="booking-modal" className="flex items-center gap-2 mt-2 py-2 rounded-full text-black text-lg gradiant border-0 px-10 w-fit"><span>Book Now</span> <BsBookmarkPlusFill /></label>




        </div>




      </div>

      <div>

        {modalitems &&

          <BookingModal
            product={modalitems}
            setModalitems={setModalitems}
            register={register}
            handleSubmit={handleSubmit}
          ></BookingModal>
        }


      </div>







    </div >

  );
};

export default Product;