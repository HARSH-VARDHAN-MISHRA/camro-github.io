import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="logo"><img loading="lazy" decoding="async" src={logo} alt="logo" /></div>
              <p>
                <strong>Address :</strong>
                <a href="">B-91 Rohini Phase 2 New Delhi-110084</a>
              </p>
              <p>
                <strong>Contact Us :</strong>
                <a href="tel:+919876543210">+91-9876543210</a>
              </p>
              <a href="" className="icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-square-facebook"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-twitter"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className="col-md-3">
              <div className="head">Quick Links</div>
              <ul>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./shop.html">Shop</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="head">Categories</div>
              <ul>
                <li><a href="./shop.html">3 IN 1 COOKER</a></li>
                <li><a href="./shop.html">OUTER LID</a></li>
                <li><a href="./shop.html">INNER LID</a></li>
                <li><a href="./shop.html">3 IN 1 COOKER</a></li>
                <li><a href="./shop.html">OUTER LID</a></li>
                <li><a href="./shop.html">INNER LID</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="head">Categories</div>
              <ul>
                <li><a href="">Terms & Condition</a></li>
                <li><a href="">Shipping & Delivery</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Return & Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center py-2">
              <div className="copyright">
                <p>© 2024, CAMRO - <a href="https://www.digiindiasolutions.com/" target="_blank">DIGI INDIA SOLUTIONS</a></p>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer