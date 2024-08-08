import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';


export default function ThirdNavbar() {
  return (
    <>
    <div className="thirdnavbar">
        <div className="subnav">
           <div className="firstdiv">
           <div className="hiddendiv2"><p>FILTER</p></div>
           <div className="items"><h4>3425 ITEMS</h4></div>
           <div className="filter" ><IoIosArrowForward /><p>SHOW FILTER</p></div>
           </div>
            <div className="recommendations">
                <select>
                    <option  value="">RECOMMENDED</option>
                    <option value="">NEWEST FIRST</option>
                    <option value="">POPULAR</option>
                    <option value="">PRICE : HIGH TO LOW</option>
                    <option value="">PRICE : LOW TO HIGH</option>
                </select>
            </div>
        </div>
    </div>
    </>
  )
}

