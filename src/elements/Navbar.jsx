import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
export const Navbar = () => {
    const [show, setShow] = useState(false)
    const path = window.location.pathname
  return (
    <div className='flex flex-col w-full min-h-16 lg:h-36 bg-white/70'>
        <div className='h-full flex justify-around place-items-center z-20 text-amber-100 w-full  bg-linear-to-b/oklch from-[#324e51] to-[#3d676b]'>
            <div className='flex w-[60%] itens-center justify-center h-full z-20'>
                <h3 className=' flex items-center font-extrabold'>LOGO + PT Binaiya Samudera Indonesia</h3>
            </div>
            <div className='lg:grid lg:grid-cols-4 w-[40%]  h-full place-items-center hidden lg:show'>
                <a href='/' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${path==='/'? 'text-white font-bold' :'font-bold'  }`}>Beranda</a>
                <a href='/about' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${path==='/about'? 'text-white font-bold' :'font-bold'  }`}>Tentang Kami</a>
                <a href='/service' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${path==='/service'? 'text-white font-bold' :'font-bold'  }`}>Layanan</a>
                <a href='/contact' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${path==='/contact'? 'text-white font-bold' :'font-bold'  }`}>Kontak</a>
            </div>
            <FaBars className='lg:hidden z-20' onClick={()=>{setShow(!show); console.log(show)}}/>
           </div>
            <div className={`fixed w-full h-full flex flex-col gap-4 text-amber-100 justify-start items-start  bg-teal-950/70 px-2 lg:hidden ${show? "top-14" :"-top-full"} py-10 z-10 duration-200`}>
                <a href='/' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${path==='/'? 'text-white font-bold' :'font-bold'  }`}>Beranda</a>
                <a href='/about' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${path==='/about'? 'text-white font-bold' :'font-bold'  }`}>Tentang Kami</a>
                <a href='/service' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${path==='/service'? 'text-white font-bold' :'font-bold'  }`}>Layanan</a>
                <a href='/contact' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${path==='/contact'? 'text-white font-bold' :'font-bold'  }`}>Kontak</a>
           </div>
        
    </div>
  )
}
