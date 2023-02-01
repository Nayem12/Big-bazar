import React from 'react';
import sofa from '../../../Assets/sofa.webp'
import sofa1 from '../../../Assets/sofa1.jpg'
import chair from '../../../Assets/chair.jpeg'
import table from '../../../Assets/table.jpg'
import tik from '../../../Assets/tick.png'
const ChooseUs = () => {
    return (
        <>
            <div className='w-[95%] mx-auto'>
                <div className='Reasons' id='reasons'>

                    <div className='left-r'>
                        <img className='item1' src={sofa1} alt="" />
                        <img className='item2' src={chair} alt="" />
                        <img className='item3' src={table} alt="" />


                    </div>
                    <div className='right-r'>
                        <span className='reason'>Some reasons</span>
                        <div className='chooseus'>
                            <span className='gap-text'>Why</span>
                            <span>Choose us</span>
                        </div>
                        <div className='flex gap-4 text-white'>
                            <img src={tik} alt="" />
                            <span className='items-center'>
                                OVER 140+ salers
                            </span>
                        </div>
                        <div className='flex gap-4 text-white'>
                            <img src={tik} alt="" />
                            <span className='items-center'>
                                Secure delivery
                            </span>
                        </div>
                        <div className='flex gap-4 text-white'>
                            <img src={tik} alt="" />
                            <span className='items-center'>
                                verification product
                            </span>
                        </div>
                        <div className='flex gap-4 text-white'>
                            <img src={tik} alt="" />
                            <span className='items-center'>
                                User verification
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;