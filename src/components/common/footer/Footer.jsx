import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css"

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
function Footer () {

  return (
      <>
          <div className="Footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-lg-5 col-12 ft-1">
                          <h3><span>Doc</span>Book</h3>
                          <p>DocBook is a teleconsulting platform</p>
                          <div className="footer-social-media">
                              {SocialShare.map((val , i) => (
                                  <p key={i}><a href={`${val.link}`}>{val.Social}</a></p>
                              ))}
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-12 ft-2">
                          <h5>Quick Links</h5>
                          <ul>
                              <li className="nav-item">
                                  <a className="" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                  <a className="" href="/">Service</a>
                              </li>
                              <li className="nav-item">
                                  <a className="" href="/">Contact Us</a>
                              </li>
                              <li className="nav-item">
                                  <a className="" href="/">Services</a>
                              </li>
                              <li className="nav-item">
                                  <a className="" href="/">Portfolio</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-6 col-lg-4 col-12 ft-3">
                          <h5>Contact us</h5>
                          <p><i class="fa-solid fa-phone-volume"></i> +49 17666158107</p>
                          <p><i class="fa-solid fa-envelope"></i> Docbook@gmail.com</p>
                          <p><i class="fa-solid fa-paper-plane"></i> Essen, Germany.</p>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )

}

export default Footer;