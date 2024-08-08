import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { IoLogoPaypal } from "react-icons/io5";
import { LiaCcAmex } from "react-icons/lia";
import { FaApplePay } from "react-icons/fa6";



export default function Subfooter() {
  return (
    <>
    <div className="sub-foot-container">
        <div className="subfoot">
            <div className="footer1">
                <h2>xyz.com</h2>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
            </div>
            <div className="footer2">
            <h2>QUICK LINKS</h2>
                <p>Orders & shipping</p>
                <p>Join/login as a seller</p>
                <p>Payment & Pricing</p>
                <p>Returns & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="footer3"><h2>FOLLOW US</h2>
            <div className="socialmedia">
            <div className="instagram"><SiInstagram /></div>
            <div className="linkedin"><FaLinkedin /></div>
            </div>
            <div className="credit">
              <h3>WE ACCEPT</h3>
              <div className="payicons">
              <div className="gpay"><SiGooglepay /></div>
              <div className="mastercard"><FaCcMastercard /></div>
              <div className="paypal"><IoLogoPaypal /></div>
              <div className="amex"><LiaCcAmex /></div>
              <div className="applepay"><FaApplePay /></div>
              </div>
            </div>
            </div>
        </div>
    </div>
    <div className="copyright"><p>Copyright © 2023 . All rights reserved </p></div>
    </>
  )
}
