import React, { useEffect, useState } from 'react';
import Cards2 from '../Cards/Cards2';
import { MdChevronRight } from 'react-icons/md';

const Prducts = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
            fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    } , [])
    return (
        <div className="max-w-7xl mx-auto">
                <div className="flex justify-between border-b mt-3 pb-2">
                    <h1 className='text-xl font-bold'>Popular Products</h1>

                    <button type="button" className="btn d-flex items-center text-lg">View All <MdChevronRight className=""/></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-4">
                    {
                        products?.map(product => <Cards2 product={product}></Cards2>)
                    }
                </div>
        </div>
    );
};

export default Prducts;