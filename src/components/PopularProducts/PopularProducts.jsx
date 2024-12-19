import React, { useEffect, useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
import Cards from '../../shared/Cards/Cards';

const PopularProducts = () => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
            fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    } , [])
    return (
        <div className="container px-auto">
                <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                    <h1 className='fs-4 fw-semibold'>Popular Products</h1>

                    <button type="button" className="btn btn-outline-success d-flex align-items-center border-0 fs-5">View All <span><MdChevronRight className="ps-1 fs-4"/></span></button>
                </div>
                <div className="row mt-5">
                    {
                        products?.map(product => <Cards product={product}></Cards>)
                    }
                </div>
        </div>
    );
};

export default PopularProducts;