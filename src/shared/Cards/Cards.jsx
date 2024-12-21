import React from 'react';
import { IoIosStar } from 'react-icons/io';

const Cards = ({product}) => {
    console.log(product)
    return (
        <div className="col-md-2">
            <div>
                <img src={product?.image} alt=""className="img-fluid"/>
            </div>

            <div className="mt-1">
                
                <p className="fs-6 mb-0">{product?.product_name.slice(0,40)}</p>
                <p className='fw-medium text-success mt-1'>Price : ${product?.price} <span className='text-decoration-line-through text-secondary mb-0'>$35</span></p>
            </div>



        </div>
    );
};

export default Cards;