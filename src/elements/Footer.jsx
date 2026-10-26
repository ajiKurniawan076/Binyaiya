import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='flex flex-col w-full min-h-56 bg-linear-to-b/oklch from-[#324e51] to-[#3d676b] text-amber-100 px-6'>
        <div className='h-[80%] gap-4 grid lg:flex w-full justify-around lg:px-16 lg:py-2'>
            <div className='flex flex-col w-full gap-2'>
                <span className='font-bold text-xl'>Quick Link</span>
                <div className='flex justify-center lg:justify-end'>
                    <div className='flex flex-col w-full lg:w-[50%] text-left'>
                        <span className=''>Blogs</span>
                        <span className=''>Careers</span>
                        <span className=''>About Us</span>
                        <span className=''>News</span>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col w-full gap-2'>
                <span className='font-bold text-xl'>Our Services</span>
                <div className='flex justify-center lg:justify-end'>
                    <div className='flex flex-col w-full lg:w-[50%] text-left'>
                        <span className=''>Services 1</span>
                        <span className=''>Services 2</span>
                        <span className=''>Services 3</span>
                        <span className=''>Services 4</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full gap-2'>
                <span className='font-bold text-xl'>Contact Info</span>
                <div className='flex justify-center lg:justify-end'>
                    <div className='flex flex-col w-full lg:w-[50%] text-left'>
                        <span className='flex items-center gap-1'><FaWhatsapp/> +62 881 011 011</span>
                        <span className='flex items-center gap-1'><FaFacebook/> Facebook</span>
                        <span className='flex items-center gap-1'><FaInstagram/> Instagram</span>
                        <span className='flex items-center gap-1'><FaGoogle/> Email</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[20%] flex justify-end'>PT Binaiya Samudera Indonesia, Jalan...</div>
    </div>
  )
}
