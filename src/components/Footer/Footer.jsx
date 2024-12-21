import React from 'react';
import './Footer.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'


const Footer = () => {
    return (
        <div>
            <footer className="bg-footer">
               <div className="d-flex  justify-content-between ">
               <div>
                    <div className="d-flex align-items-center">
                            <img src={img1} alt="" />
                            <div className="ms-2">
                                <p className="mb-0 fs-6 text-secondary">Location</p>
                                <p className='mb-0'>New York, NY, USA</p>
                            </div>
                    </div>
                    <div className="d-flex align-items-center my-4">
                            <img src={img2} alt="" />
                            <div className="ms-2">
                                <p className="mb-0 fs-6 text-secondary">Have a question?</p>
                                <p className='mb-0'>324-094-3233</p>
                            </div>
                    </div>
                    <div className="d-flex align-items-center">
                            <img src={img3} alt="" />
                            <div className="ms-2">
                                <p className="mb-0 fs-6 text-secondary">Contact us at</p>
                                <p className='mb-0'>safecart@mail.com</p>
                            </div>
                    </div>
                </div>

                <div>
                    <h5>Shop</h5>
                    <ul className="ps-0 mt-3">
                        <li className='fs-6'><a href=""className="text-light text-decoration-none">Shop</a></li>
                        <li className="mt-2 fs-6"><a href=""className="text-light text-decoration-none">My Orders</a></li>
                        <li className="mt-2 fs-6"><a href=""className="text-light text-decoration-none">My Account</a></li>
                        <li className="mt-2 fs-6"><a href=""className="text-light text-decoration-none">Track My Order</a></li>
                        <li className="mt-2 fs-6"><a href=""className="text-light text-decoration-none">Return Policy</a></li>
                        <li className="mt-2 fs-6"><a href=""className="text-light text-decoration-none">Refund Policy</a></li>
                        
                    </ul>
                   
                </div>
                <div>
                    <h5>Categories</h5>
                    <ul className="ps-0 mt-3">
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Gadget Items</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Fashion & Wear</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Home Appliances</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Pet Foods</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Surveillance Cameras</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Monitors</a></li>
                        
                        
                    </ul>
                   
                </div>
                <div>
                    <h5>About</h5>
                    <ul className="ps-0 mt-3">
                        <li><a href=""className="text-light text-decoration-none">About us</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">FAQ</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Help</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Contact us</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Privacy policy</a></li>
                        <li className="mt-2"><a href=""className="text-light text-decoration-none">Terms & Conditions</a></li>
                        
                    </ul>
                </div>
                <div className="">
                    <h5>Newsletter</h5>
                    <p className='my-3' style={{maxWidth : '350px'}}>Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>

                    <div className="input-group mb-3 rounded-circle">
                        
  <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text button65" id="basic-addon2">Submit</span>
</div>
                    
                </div>
               </div>
            </footer>
        </div>
    );
};

export default Footer;