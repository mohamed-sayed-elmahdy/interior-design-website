import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'
import ProjectHeader from '../components/ProjectHeader'


function page({children}) {
  return (
    <div>
      <Navbar/>
      <ProjectHeader/>
      {children}
      <Footer/>
    </div>
  )
}

export default page
