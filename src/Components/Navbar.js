import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";



export default function () {
  return (
    <>
   <div className="container">
    <div className="menu">
    <CiMenuBurger />
    </div>
    <div className="vector">
        <div className="icon"><AiOutlineSlackSquare /></div>
    </div>
   <div className="logo">LOGO</div>
   <div className="main">
   <div className="icons">
    <div className="search"><CiSearch /></div>
    <div className="heart"><CiHeart /></div>
    <div className="bag"><PiHandbagBold /></div>
    <div className="profile"><MdOutlinePersonOutline /></div>
   </div>
   <div className="lang">
   <select>
        <option>Eng</option>
        {/* <option>Hin</option>
        <option>Guj</option> */}
    </select>
   </div>
   </div>
   </div>
    </>
  )
}
