import React from 'react'
import portfolioCss from './Portfolio.module.css'
import ImgPor from '../../Assets/image/poert1.png'
import ImgPo from '../../Assets/image/port2.png'
import ImgP from '../../Assets/image/port3.png'
export default function Portfolio() {

  
  return <>
<section className='mt-5 p-5 fw-bolder'>
<div className='container '>
<h1 className='text-center mt-2'>PORTFOLIO COMPONENT</h1>
<h5 className={`${portfolioCss.h5} position-relative text-center `}><i class="fa-solid fa-star"></i></h5>
<div className='row mb-5'>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden pointer`}>
  <img className='w-100 rounded-3' src={ImgPor} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden`}>
  <img className='w-100 rounded-3' src={ImgPo} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden`}>
  <img className='w-100 rounded-3' src={ImgP} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
</div>
<div className='row'>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden`}>
  <img className='w-100 rounded-3' src={ImgPor} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden`}>
  <img className='w-100 rounded-3' src={ImgPo} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
  <div className=' col-lg-4 col-md-4'>
<div className={`${portfolioCss.chiled} position-relative overflow-hidden`}>
  <img className='w-100 rounded-3' src={ImgP} alt="port1" />
  <div className={`${portfolioCss.layer} rounded-3`}>
  <i class="fa-solid fa-plus"></i>
  </div>
</div>
  </div>
</div>
 </div>
</section>
  </>
}
