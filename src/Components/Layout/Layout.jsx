import React from 'react'
import Navbar from '../Navbar/Navbar'

import Foot from '../Foot/Foot'
import Home from "../Home/Home"
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
<Navbar/>
<Outlet></Outlet>

<Foot/>

  </>
}

