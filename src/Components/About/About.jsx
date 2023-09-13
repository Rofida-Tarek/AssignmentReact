import React from 'react'
import AboutCss from './About.module.css'
export default function About() {
  return <>
  <div className={`${AboutCss.AboutComponent}  `  }>
<div className='container '>
<div className='pt-3'>
<h2 className='fw-bolder text-white text-center mb-3 '>ABOUT COMPONENT
</h2>
</div>
<h5 className={`${AboutCss.h5} text-center text-white position-relative mt-2`}><i class="fa-solid fa-star"></i></h5>

  <div className='row text-white mt-4 '>
    <div className='col-md-6 '>
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className='col-md-6'>
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>
  </div>
  
  </>
}
