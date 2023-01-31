import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';

const Sliders = ({ allproduct }) => {

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
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md addpic"
                    style={{
                        background: `url(${image})`
                    }}
                ></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">$ {price}</span>
                        <button className="px-5 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-lime-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" onClick={() => handleAddToWishList(allproduct)}>
                            <BsFillCartPlusFill className='text-2xl mr-2' />
                            WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sliders;