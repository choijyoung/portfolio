import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/Heroimg2'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Projects" text="This is some of my work" />
      <Footer />
    </div>
  )
}

export default Project