import React, { useState } from 'react';
import bag from '../Images/bag.jpg';
import bag2 from '../Images/bag2.jpg';
import bag3 from '../Images/bag3.jpg';
import bag4 from '../Images/bag4.jpg';
import bag5 from '../Images/bag5.jpg';
import bag6 from '../Images/bag6.jpg';
import toy from '../Images/toy.jpg';
import toy2 from '../Images/toy2.jpg';
import product from '../Images/product.jpg';
import cap from '../Images/cap.jpg';
import backbag from '../Images/backbag.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function ProductList() {
  // Sample product data, replace with actual product data
  const products = [
    { id: 1, imgSrc: bag },
    { id: 2, imgSrc: toy },
    { id: 3, imgSrc: product },
    { id: 4, imgSrc: cap },
    { id: 5, imgSrc: backbag },
    { id: 6, imgSrc: toy2 },
    { id: 7, imgSrc: bag2 },
    { id: 8, imgSrc: bag3 },
    { id: 9, imgSrc: bag4 },
    { id: 10, imgSrc: bag5 },
    { id: 11, imgSrc: bag6 },
    { id: 12, imgSrc: backbag },
    { id: 13, imgSrc: cap },
    { id: 14, imgSrc: bag6 },
    { id: 15, imgSrc: bag5 },
    { id: 16, imgSrc: bag2 }
  ];

  // State to keep track of liked status for each product
  const [likedProducts, setLikedProducts] = useState(
    products.map(() => false) // Initialize all to false
  );

  const toggleLike = (index) => {
    const newLikedProducts = [...likedProducts];
    newLikedProducts[index] = !newLikedProducts[index];
    setLikedProducts(newLikedProducts);
  };

  return (
    <div className="product-container">
      <div className="products">
        {products.map((product, index) => (
          <div className="card" key={product.id}>
            <img src={product.imgSrc} alt={`Product ${index + 1}`} />
            <div className="textmain">
              <div className="productcon">
                <h4><b>PRODUCT NAME</b></h4>
                <p>Sign-in or Create an account to see pricing</p>
              </div>
              <div className="heart" onClick={() => toggleLike(index)}>
                {likedProducts[index] ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
