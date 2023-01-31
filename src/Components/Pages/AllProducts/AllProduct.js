import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthContexts/Contexts/AuthProvider';
import './Allproduct.css'

const AllProduct = ({ allproduct }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
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
    const buyeremail = user?.email;
    const productId = allproduct?._id;
    const newProducts = { ...allproduct, buyeremail, productId }
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
        else {
            navigate("/login")
        }


    }
    return (
        <div>
            <div className="card card-side bg-gray-600 shadow-xl producteffect hover:bg-[#2e815d] cursor-pointer">

                <div className="card-body  text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                        <button className=" flex items-center gap-2 mt-2 py-2 rounded-full text-black text-lg gradiant border-0 px-10"
                            onClick={() => handleAddToWishList(allproduct)}>
                            <BsFillCartPlusFill className='text-2xl mr-2' />
                            WishList
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