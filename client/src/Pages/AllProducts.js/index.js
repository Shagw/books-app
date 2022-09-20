import React from 'react';
import { useSelector } from 'react-redux';
import BooksCard from '../../components/BookCards';
import "./allProducts.css"
export default function AllProducts() {
    const { booksData = [] } = useSelector((state) => state.dashBoardData);
  return (
    <div> 
      <h3 style={{margin:"25px", fontSize:"20px"}}>
      All Products

      </h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"start",flex:"2 1"}}>

      {booksData.length>0 && booksData.map((items,index)=>(
        <BooksCard bookItem={items}/>
      )) }
            </div>

    </div>
  )
}
