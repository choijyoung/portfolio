import "./footer.css"
import { FaHome } from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                    <FaHome size={20} style={{ color: "black", marginRight:"2rem" }} />
                        <div>
                        <p>Philadelphia, PA</p>
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer