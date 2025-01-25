import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className="">
                    <img src={assets.logo} className="mb-5 w-32" />
                    <p className="w-full md:w-2/3 text-gray-600"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero quos consectetur dolorum iure doloribus ex, nemo optio tempore nisi eos minima illum voluptatum, officiis reprehenderit? Perspiciatis culpa quidem itaque.</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+133 111 21</li>
                        <li>bjankovic16@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr />
                <p className='py-5 text-sm text-center'> Copyright 2025 @ all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer