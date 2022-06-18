import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About me!" text="I'm a developer!" />
      <Footer />
    </div>
  )
}

export default About