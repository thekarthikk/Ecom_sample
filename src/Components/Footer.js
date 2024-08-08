import React from 'react'
import usa from '../Images/usa.png'
import { BsDot } from "react-icons/bs";


export default function Footer() {
  return (
    <>
    <div className="foot-container">
        <div className="foot-sub-con">
            <div className="right">
                <div className="foot-text1"><h3>BE THE FIRST TO KNOW</h3></div>
                <div className="foot-text2"><h5>Sign up for updates in metta muse</h5></div>
                <div className="searchbar">
                    <input type="text" placeholder='Enter your email...'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="left">
                <div className="contact"><h3>CONTACT US</h3></div>
                <div className="number"><h5>+44 123456</h5></div>
                <div className="mail"><h5>customercare@.com</h5></div>
                <div className="currency">
                    <h3>CURRENCY</h3>
                    <div className="usa">
                    <img src={usa} alt="usa flag" /><h6 style={{fontSize:'1.2rem'}}><BsDot /> USD</h6>
                    </div>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
