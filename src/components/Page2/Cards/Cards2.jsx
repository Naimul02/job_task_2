import React from 'react';
import { IoIosStar } from 'react-icons/io';

const Cards2 = ({product}) => {
    console.log(product)
    return (
        <div>
            <div>
                <img src={product?.image} alt=""/>
            </div>

            <div className="mt-1">
                
                <p className=" mb-0">{product?.product_name.slice(0,40)}</p>
                <p className='mt-1 text-green-600 font-semibold'>Price : ${product?.price} <span className='text-gray-600 line-through'>$35</span></p>
            </div>



        </div>
    );
};

export default Cards2;