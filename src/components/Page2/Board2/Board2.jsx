import React from 'react';
import '../../Board/Board.css';
import img1 from '../../Board/images/img1.png';
import img2 from '../../Board/images/img2.png';
import img3 from '../../Board/images/img3.png';

const Board2 = () => {
    return (
          <div className='shadow-top py-5 mt-5'>
                    <div className="container px-auto">
                    <div className="flex justify-around">
                    <div className='text-center'>
                        <div className="flex justify-center">
                        <img src={img1} alt="" className="" />
                        </div>
                        <h4 className="my-1 text-lg mt-3">9,102+ Customers</h4>
                        <p className="mb-0 text-gray-600 px-2">9,102+ Customers are making retained purchases every now & then</p>
        
        
                    </div>
                    <div className='text-center px-4'>
                        <div className="flex justify-center">
                        <img src={img2} alt="" className="" />
                        </div>
                        <h4 className="my-1 text-lg mt-3">1,900+ Vendors</h4>
                        <p className="mb-0 text-gray-600 px-2">1,900 Vendors are working with us around the US</p>
        
        
                    </div>
                    <div className='text-center'>
                        <div className="flex justify-center">
                        <img src={img3} alt="" className="" />
                        </div>
                        <h4 className="my-1 text-lg mt-3">12 Awards</h4>
                        <p className="mb-0 text-gray-600 px-2">We won 12 awards for excellency in customer service</p>
        
        
                    </div>
                    </div>
                </div>
                </div>
    );
};

export default Board2;