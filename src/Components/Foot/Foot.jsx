import React from 'react'
import Footcss from './Foot.module.css'
export default function Foot() {
  return <>
  <div className={Footcss.color}>
    <div className='container p-5'>
        <div className='row p-4'>
            <div className='col-md-4 d-flex align-items-center flex-column p-2'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='col-md-4 d-flex align-items-center flex-column p-2'>
                <h3>AROUND THE WEB</h3>
               <div>
               <i className={`${Footcss.socialMedia} fa-brands fa-facebook`}></i>
               <i className={`${Footcss.socialMedia} fa-brands fa-twitter`}></i>
               <i className={`${Footcss.socialMedia} fa-brands fa-linkedin-in`}></i>
               <i className={`${Footcss.socialMedia} fa-solid fa-globe`}></i>
               </div>
            </div>
            <div className='col-md-4 d-flex align-items-center flex-column p-2 text-center '>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>
               
            </div>
        </div>
    </div>
    <div className={`${Footcss.footcolor} p-4 text-center lead`}>
      <h6>Copyright © Your Website 2021</h6>
    </div>
  </div>
  
  </>
}
