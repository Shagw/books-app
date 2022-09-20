

import React from "react";
import { useNavigate } from "react-router-dom";
import './BookCards.css'
const BooksCard = (props) => {
  const { bookItem,index } = props;
  const navigate = useNavigate();
  return (<>
          <div className="bookItem" key={index+"book"} onClick={()=>{
            navigate("/product?title="+bookItem.title)
          }}>
            <img
              className="bookItem-image"
              src={bookItem.imgUrl}
              alt="Book Image"
            />
            <div className="bookItem-name">{bookItem.title}</div>
            <div className="bookItem-brand">{bookItem.author}</div>
            <div className="bookItem-price-discount">
                {bookItem.discount}% off 
              </div>
            <div className="bookItem-price">
              <div>Rs.{bookItem.price - Math.round((bookItem.price*bookItem.discount)/100)}</div>
              <div className="bookItem-totalprice">
                Rs.{bookItem.price}
              </div>
            </div>
            <div className="bookItem-rating">
              {
                <div>
                  <strong>Reviews :</strong> {bookItem.review}
                </div>
              }
            </div>
          </div>
    </>)
};

export default BooksCard;