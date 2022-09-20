import React, { useEffect, useState } from "react";
import "./CarouselImages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import BooksCard from "./BookCards";
const NewArrivals = () => {
  const [newArrival,setNewArrival] = useState("")
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
    let newArrival = booksData && booksData.filter(item => item.newArrivals==true);
    console.log(newArrival,booksData,"kjhg")
    setNewArrival(newArrival)
  },[])

  return (
    <>
      <h3 style={{paddingLeft:"30px",paddingBottom:"10px"}}>New Arrivals</h3>
      <Carousel responsive={responsive}>
        {newArrival && newArrival.map((items,index)=><BooksCard bookItem={items} index={index}/>)}
      </Carousel>
      </>
  );
};

export default NewArrivals;
