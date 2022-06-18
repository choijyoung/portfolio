import "./footer.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{ color: "white", marginRight:"2rem" }} /> Based in Philadelphia</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "white", marginRight:"2rem" }} /> Choi.jae.y@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me!</h4>
                <p>Hello! I am a Developer based in Philadelphia, PA. You can reach me here!</p>
                    <div className="social">
                        <FaLinkedin size={30} style={{ color: "white", marginRight:"1rem" }} />
                        <FaGithub size={30} style={{ color: "white", marginRight:"1rem" }} />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer