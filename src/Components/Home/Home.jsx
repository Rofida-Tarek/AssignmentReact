
import React from 'react'
import HomeCss from './Home.module.css'
import ImageVA from '../../Assets/image/avataaars.svg'


export default function Home() {
  return <>

<div className={`${HomeCss.home} mt-5 p-5 `}>
<div className='d-flex justify-content-center align-items-center flex-column text-white '>
<img className='mb-3 w-75' src={ImageVA} alt="" />
<div>
<h1>START FRAMEWORK</h1>
</div>

<h5 className={`${HomeCss.h5} position-relative`}><i className="fa-solid fa-star text-white mb-3 "></i></h5>

<p>Graphic Artist - Web Designer - Illustrator</p>
</div>

</div>

  </>
}
