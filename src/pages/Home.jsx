import React from 'react'
import logo from '../assets/logo.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/kapal1.avif'
import img3 from '../assets/kapal2.jpg'
import img4 from '../assets/kapal4.webp'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import { FaArrowCircleRight, FaBookOpen, FaFirstOrder, FaPeopleCarry, FaPhone, FaServicestack, FaShippingFast, FaUserAlt, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserTag, FaWhatsapp } from 'react-icons/fa'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <section className='grid place-items-start justify-items-start text-center h-fit bg-white'>
              <Navbar/>
              
              <div className='grid w-full h-fit text-white relative'>
                <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} interval={3000}>
                <div>
                    <img className='object-content h-200' src={img2} />
                </div>
                <div>
                    <img className='object-content h-200' src={img3} />
                </div>
                <div>
                    <img className='object-content h-200' src={img4} />
                </div>
            </Carousel>
                <button className=' bg-white flex gap-1 rounded-2xl w-32 absolute bottom-6 left-6 p-2 border-2 border-green-500/50 hover:bg-gray-200 duration-300 text-green-500 '><FaWhatsapp className='text-green-500' size={40}/> Hubungi Kami</button>
              </div>
              

              <div className='w-full md:w-3/4 bg-white justify-self-center p-2 py-12 flex flex-col gap-4 justify-center items-center text-teal-950/80'>
                <h2>Layanan Kami</h2>
                <div className='grid  md:grid-cols-4 gap-20 place-items-center h-full p-2 mb-14'>
                                          <div className='flex  flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaServicestack className='w-full h-full p-8'/></button>
                                          Layanan 1
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaBookOpen className='w-full h-full p-8'/></button>
                                          Layanan 2
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaFirstOrder className='w-full h-full p-8'/></button>
                                          Layanan 3
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40' onClick={()=>{window.open('/service')}}><FaArrowCircleRight className='w-full h-full p-8'/></button>
                                          Lihat Semua
                                          </div>
                                        </div>
                <h2>Mitra Kami</h2>
                <div className='grid md:grid-cols-4 gap-20 place-items-center h-full p-2'>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaUserTag className='w-full h-full p-8'/></button>
                                          Mitra 1
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaUserCheck className='w-full h-full p-8'/></button>
                                          Mitra 2
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaUserCircle className='w-full h-full p-8'/></button>
                                          Mitra 3
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaUserAlt className='w-full h-full p-8'/></button>
                                          Mitra 4
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaUserAstronaut className='w-full h-full p-8'/></button>
                                          Mitra 5
                                          </div>
                                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40' onClick={()=>{window.open('/service')}}><FaArrowCircleRight className='w-full h-full p-8'/></button>
                                          Lihat Semua
                                          </div>
                                        </div>
              </div>
              <Footer/>
          </section>
        </>
  )
}
