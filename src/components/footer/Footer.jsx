import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-basic">
       
           <ul className="list-inline">
                <li className="list-inline-item"><strong>Home</strong></li>
                <li className="list-inline-item"><strong>Services</strong></li>
                <li className="list-inline-item"><strong>About</strong></li>
                <li className="list-inline-item"><strong>Terms</strong></li>
                <li className="list-inline-item"><strong>Privacy Policy</strong></li>
            </ul>
            <p className="copyright"><strong><h5>Bookmy Show © 2018</h5></strong></p>
       
    </div>
  )
}

export default Footer
