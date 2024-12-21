import React from 'react';
import './Navbar.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline, IoSearch } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    return(

      <>
     
       <div>
       <div className="custom-bg py-3">
     <div className="d-flex flex-col lg:flex-row lg:justify-content-between align-items-center lg:container lg:px-auto">
    <div className='d-flex align-items-center'>
          <div className='text-light d-flex align-items-center'>
             <span><FaPhoneAlt className="fs-6"/></span>
             <span className="ms-2">(678) 999-3985</span>

         </div>
          <div className='text-light ms-5 d-flex align-items-center'>
              <span><IoLocationOutline className="fs-4"/></span>
            <span className="ms-2">96872 Boulevard Rd, CA</span>

          </div>
   </div>
   <div>
   <div className='text-light mt-2 lg:mt-0 lg:ms-5 d-flex align-items-center'>
              <span><TbTruckDelivery className="fs-4"/></span>
               <span className="ms-2">96872 Boulevard Rd, CA</span>

           </div>
  </div>
       </div>
       </div>
      
       <nav className="navbar navbar-expand-lg bg-body shadow text-dark">
  <div className="container-fluid  container px-auto">
    
    <div className=" d-flex flex-col lg:flex-row justify-center  align-items-center" id="navbarTogglerDemo01">
      <a className="navbar-brand pe-4 d-flex align-items-center" href="/"><img src={img1} alt="" />
          <span className="text-success ms-2 fs-4 fw-medium">SafeCart</span>
      </a>

      <div className="border-start hidden lg:d-flex align-items-center px-4">
          <span><IoMdMenu className="fs-3 fw-semibold   text-success"/></span>
          <span className='text-success ms-2 fs-5'>Categories</span>
      </div>


      <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-4">
        <li className="nav-item hidden lg:block">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item hidden lg:block">
          <a className="nav-link" href="/">Products</a>
        </li>
        <li className="nav-item hidden lg:block">
          <a className="nav-link" href="/page2">Page2</a>
        </li>
        <li className="nav-item hidden lg:block">
          <a className="nav-link">Contract</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <li className="nav-item block lg:hidden text-lg font-bold mr-3">
          <a className="nav-link underline" href="/page2">Page2</a>
        </li>
        <input className="form-control me-2" type="search" placeholder="Search an item" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><IoSearch /></button>
      </form>
      <div className="d-flex   align-items-center lg:ps-5"> 
          <div className="hidden lg:block"><img src={img2} alt="" /></div>
          <div className="hidden lg:block"><img src={img3} alt="" className="px-2"/></div>
          <div className="hidden lg:block"><img src={img4} alt="" /></div>
      </div>
    </div>
  </div>
</nav>
      
   </div>
  </>
    )
};

export default Navbar;