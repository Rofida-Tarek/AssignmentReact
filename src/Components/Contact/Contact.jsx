import React from 'react'
import ContactCss from './Contant.module.css'
export default function Contact() {
  return <>
 <section className='mt-5 p-5 fw-bolder '>
  <div className='container'>
  <h1 className='text-center mt-2'>CONATCT SECTION</h1>
  <h4 className='position-relative  text-center text-dark'><i class="fa-solid fa-star"></i></h4>
  <div className='w-50 m-auto'>
    <input type="text" placeholder='userName' className='form-control mb-2 border-0 border-bottom py-3'/>
    <input type="text" placeholder='userAge' className='form-control mb-2 border-0 border-bottom py-3'/>
    <input type="email" placeholder='userEmail' className='form-control mb-2 border-0 border-bottom py-3'/>
    <input type="text" placeholder='userPaaword' className='form-control mb-2 border-0 border-bottom py-3'/>
    <button className={`${ContactCss.btnn} btn btn-success mt-3`}>Send Meesage</button>
  </div>
  </div>
 </section>
  </>
}
