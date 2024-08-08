import React,{useState} from 'react'
import bag from '../Images/bag.jpg'
import bag2 from '../Images/bag2.jpg'
import bag3 from '../Images/bag3.jpg'
import bag4 from '../Images/bag4.jpg'
import bag5 from '../Images/bag5.jpg'
import bag6 from '../Images/bag6.jpg'
import toy from '../Images/toy.jpg'
import toy2 from '../Images/toy2.jpg'
import product from '../Images/product.jpg'
import cap from '../Images/cap.jpg'
import backbag from '../Images/backbag.jpg'
import { FaRegHeart } from "react-icons/fa";



export default function ProductList() {

    const [liked, setLiked] = useState(false);
  
    const toggleLike = () => {
      setLiked(!liked);
      console.log("clicked");
    };

  return (
    <>
    <div className="product-container">
      <div className="products">
       <div class="card">
        <img src={bag} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div  className={`heart ${liked ? 'liked' : ''}`} onClick={toggleLike}><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={toy} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={product} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={cap} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={backbag} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={toy2} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag2} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag3} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag4} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag5} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag6} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={backbag} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={cap} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag6} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      <div class="card">
        <img src={bag5} alt="Avatar" />
        <div className="textmain">
        <div class="productcon">
          <h4><b>PRODUCT NAME</b></h4>
          <p>Sign-in or Create an account to see pricing</p>
        </div>
        <div className="heart"><FaRegHeart /></div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

