import React from 'react'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import { FaFacebook, FaGoogle, FaInstagram, FaMapMarkedAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

export const Contact = () => {
  return (
      <section className='grid place-items-start justify-items-start text-center h-fit'
      // style={
      //    { backgroundImage: `url(${bg})`}
      // }
      >
                    <Navbar/>
                    
                    <div className='grid lg:flex w-full h-fit text-white font-serif bg-[url("assets/contact.jpg")] bg-cover bg-center'>
                      <div className='lg:w-[25%] flex flex-col p-2 bg-white/70 lg:pt-20'>
                        <h1 className='lg:text-right text-teal-950'>Contact <span className='lg:hidden'>Us</span></h1>
                        <div className='h-full bg-linear-to-b/oklch from-[#324e51] to-[#3d676b] rounded-3xl mx-2.5 my-5 flex flex-col p-1 text-amber-100'>
                          <h4>PT Binaiya Samudera Indonesia</h4>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaMapMarkedAlt/>
                            <h5>Jalan ABC</h5>
                          </div>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaPhone/>
                            <h5>021 212 212</h5>
                          </div>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaWhatsapp/>
                            <h5>088 898 898 898</h5>
                          </div>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaGoogle/>
                            <h5>binaiyasamudera@gmail.com</h5>
                          </div>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaInstagram/>
                            <h5>@BinaiyaSamudera</h5>
                          </div>
                          <div className='flex items-center gap-8 p-4 my-4'>
                            <FaFacebook/>
                            <h5>Binaiya Samudera</h5>
                          </div>
                        </div>
                      </div>
                      <div className='lg:w-[75%] flex flex-col p-2 text-teal-950 font-bold'>
                        <h1 className='text-left text-amber-100 my-18 hidden lg:block'>Us</h1>
                        <form className='h-full rounded-3xl mx-2.5  p-6 flex flex-col gap-4'>
                          <h3 className='text-left text-amber-100'>
                          Send Us A Massage
                          </h3>
                          <input type="text" className='flex w-100 bg-white/60 p-2' placeholder='Nama'/>
                          <input type="text" className='flex w-100 bg-white/60 p-2' placeholder='Email'/>
                          <textarea rows={5} className='flex w-100 bg-white/60 p-2' placeholder='Pesan Anda'/>
                          <button type='submit' className='w-100 rounded-2xl bg-white/60 p-2 hover:bg-teal-100/40'>Kirim</button>
                        </form>
                      </div>
                    </div>
                    <Footer/>
                </section>
    )
  }

