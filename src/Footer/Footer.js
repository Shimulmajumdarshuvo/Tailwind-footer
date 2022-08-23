import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaSkype, FaTelegram, FaTwitter } from 'react-icons/fa';

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
                    <div className="flex pt-2">
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
                <div className="footerCard p-12 text-gray-400 text-sm">
                    <h2 className='text-1xl text-yellow-50 pb-2'>Contact Details</h2>
                    <p>Support Center</p>
                    <p>Dhaka,Bangladesh</p>
                    <p>01743775599</p>
                    <p>infosports@gmail.com</p>
                    <p>www.youtubesports.bd</p>
                </div>

            </div>
            <div className='text-center text-white p-5'>
                <p>© 2022 Web Development Team | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;