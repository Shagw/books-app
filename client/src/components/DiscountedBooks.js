import React, { useEffect, useState } from "react";
import "./CarouselImages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import BooksCard from "./BookCards";
const DiscountedBooks = () => {
  const [discountedBooks,setDiscountedBooks] = useState("")
  const { booksData = [] } = useSelector((state) => state.dashBoardData);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(()=>{
    let discountedBook = booksData && booksData.filter(item => item.discount>30)
    setDiscountedBooks(discountedBook)
  },[])

  return (
    <>
      <h3 style={{paddingLeft:"30px",paddingBottom:"10px"}}>Minimum 30% Discount and Above</h3>
      <Carousel responsive={responsive}>
        {discountedBooks && discountedBooks.map((items,index)=><BooksCard bookItem={items} index={index}/>)}
      </Carousel>
      </>
  );
};

export default DiscountedBooks;
