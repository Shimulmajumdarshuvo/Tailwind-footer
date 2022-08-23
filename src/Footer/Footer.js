import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaSkype, FaTelegram, FaTwitter, FaPhoneAlt, FaLink } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { MdLocationOn, MdSupportAgent } from "react-icons/md";


const Footer = () => {
    return (
        <div className='bg-[#011c39]'>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
                <div className="footerCard pt-6 pl-12 pb-6">
                    <div className="flex  justify-center justify-items-center content-center">

                        <img className='w-20' src="https://i.ibb.co/zFKp84w/pngtree-blue-black-round-football-club-logo-png-image-4724388-removebg-preview.png" alt="" />
                        <h2 className='pt-8 pl-4 text-2xl font-semibold text-blue-50'> FOOT</h2><h2 className='pt-8 text-2xl font-semibold text-blue-300'>BALL</h2>

                    </div>
                    <p className='text-gray-400 text-sm'>
                        Football fans enjoy talking about their passion with others, especially on YouTube. Clip compilations that explore the culture and history of the game are particularly popular.
                    </p>
                    <div className="flex pt-2 cursor-pointer">
                        <span className='text-white p-2 m-1 bg-slate-600 '><FaFacebookSquare /></span>
                        <span className='text-white p-2 m-1 bg-slate-600'><FaGithubSquare /></span>
                        <span className='text-white p-2 m-1 bg-slate-600'><FaInvision /></span>
                        <span className='text-white p-2 m-1 bg-slate-600'><FaSkype></FaSkype></span>
                        <span className='text-white p-2 m-1 bg-slate-600'><FaTelegram></FaTelegram></span>
                        <span className='text-white p-2 m-1 bg-slate-600'><FaTwitter></FaTwitter></span>

                    </div>


                </div>
                <div className="footerCard p-12 text-gray-400 text-sm ">
                    <h2 className='text-1xl text-yellow-50 pb-2'>Latest Service</h2>
                    <p >Web Development</p>
                    <p>Web Design</p>
                    <p>Theme Development</p>
                    <p>UI/UX Design</p>
                    <p>Wordpress</p>

                </div>
                <div className="footerCard p-12 text-gray-400 text-sm ">
                    <h2 className='text-1xl text-yellow-50 pb-2'>Quick Links</h2>
                    <p>Home</p>
                    <p>About Our Website</p>
                    <p>Service</p>
                    <p>Shop</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
                <div className="footerCard pt-12 text-gray-400 text-sm">
                    <h2 className='text-1xl text-yellow-50 pb-2'>Contact Details</h2>
                    <p className='flex'><span className='pr-2 text-blue-50 text-lg'><MdSupportAgent></MdSupportAgent></span> Support Center</p>
                    <p className='flex'><span className='pr-2 text-blue-50 text-lg'><MdLocationOn></MdLocationOn></span> Dhaka,Bangladesh</p>
                    <p className='flex'><span className='pr-2 text-blue-50 text-base'><FaPhoneAlt></FaPhoneAlt></span> 01743775599</p>
                    <p className='flex'><span className='pr-2 text-blue-50 text-base'><SiGmail></SiGmail></span> infosports@gmail.com</p>
                    <p className='flex'><span className='pr-2 text-blue-50 text-base'><FaLink></FaLink></span> www.youtubesports.bd</p>
                </div>

            </div>
            <div className='text-center text-white p-5'>
                <p>© 2022 Web Development Team | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;