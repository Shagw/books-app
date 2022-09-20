import React from 'react';
import { useSelector } from 'react-redux';
import BooksCard from '../../components/BookCards';

export default function WishlistItems() {
    const { wishListItems=[] } = useSelector(
      (state) => state.loginData
    );
    console.log(wishListItems)
  return (
    <div> 
      <h3 style={{margin:"25px", fontSize:"20px"}}>
      Your Wishlist Items

      </h3>
      <div style={{display:"flex"}}>

      {wishListItems.length>0 && wishListItems.map((items,index)=>(
        <BooksCard bookItem={items} index={index}/>
      )) }
            </div>

    </div>
  )
}
