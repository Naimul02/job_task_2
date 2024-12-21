import React from 'react';
import './Banner.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto my-8 lg:my-16'>
            <div className="flex flex-col lg:flex-row items-center  gap-4">
            <div className="h-[472px] space-y-4">
            <div className='bg-color h-[228px]  rounded flex items-center px-4'>
                   <div>
                   <p className="text-white">Novembers <br />
                    Gadget Madness</p>
                    <h2 className="text-lg font-semibold">20% OFF</h2>
                    <button className=" px-4 py-1 rounded-lg hover:cursor-pointer bg-[#F6F54D]  text-black">Get Offer</button>
                   </div>
                   <div>
                    <img src={img1} alt="" className="h-full"/>
                   </div>
            </div>
            <div className='bg-[#F6F54D] h-[228px] rounded flex items-center  py-3  '>
                   <div className="text-center w-[200px]">
                   <p className="text-lg mb-0">Cyber Monday Special</p>
                    <h2 className="text-xl font-semibold">HOME APPLIANCES</h2>
                    
                   </div>
                   <div>
                    <img src={img2} alt="" className="h-full max-w-[250px]"/>
                   </div>
            </div>
            </div>

            <div className="bg-color-gradient mx-4 lg:px-0   flex flex-col lg:flex-row items-center rounded">
                    <div className="lg:w-[500px] p-5 space-y-3">
                        <h4 className="text-base font-semibold">WINTER 2024 Offer</h4>
                        <h2 className="text-3xl font-semibold">Grab the best fashion deals in  this winter</h2>
                        <button className="rounded px-4 mt-8 py-2 bg-[#0C1230] text-white">Get Offer</button>

                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;