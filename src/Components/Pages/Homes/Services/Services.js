import React from 'react';
import './Services.css'
import schair from '../../../../Assets/schair.png'
import sbed from '../../../../Assets/sbed.png'
import soffice from '../../../../Assets/soffice.png'
import skitchen from '../../../../Assets/skitchen.png'
import shouse from '../../../../Assets/shouse.png'
import stable from '../../../../Assets/stable.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            image: schair,
            name: "Chair & Armchairs",
            details: "Among all other furniture items that we manufacture, the chairs probably showcase the biggest variety of styles!",
            next: 2
        },
        {
            image: sbed,
            name: "Bedroom Furniture",
            details: "With bedroom being one of the most important lifestyle places in your house, equipping it with some quality furniture…",
            next: 3
        },
        {
            image: soffice,
            name: "Office Furniture",
            details: "Every single office, with either 2 or 222 employees working there needs a set of essential furniture items.",
            next: 4
        },
        {
            image: skitchen,
            name: "Kitchen Furniture",
            details: "The kitchen is by far one of the most essential places for your lifestyle. This is why having it equipped with some…",
            next: 5
        },
        {
            image: shouse,
            name: "House Furniture",
            details: "Just as it goes for major and small home appliances, the home furniture is either a big one like a dining table or a small one…",
            next: 6
        },
        {
            image: stable,
            name: "Tables",
            details: "Manufacturing craft tables for as long as we do means working with miscellaneous visual styles and types of materials…",
            next: 1
        }
    ]
    return (
        <div className='mt-[50px] services'>
            <h2 className="text-5xl font-bold text-center text-white">Our services</h2>
            <div className='hrline'></div>
            <div className='grid grid-cols-3 w-[85%] mx-auto gap-2 mt-5'>
                {
                    servicesData.map(service => <Service
                        key={service.next}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;