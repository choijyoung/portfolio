import "./HeroImgStyles.css";
import IntroImg from "../assets/austin-schmid-4tNSamUThkk-unsplash.jpeg"
import { Link } from "react-router-dom"

import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="img"/>
        </div>
        <div className="content">
            <h1>Hi, My Name is Jae Young Choi</h1>
            <h3>I'm a developer!</h3>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn2">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg