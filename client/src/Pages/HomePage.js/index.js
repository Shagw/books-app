import React, { useEffect } from "react";
import CarouselImages from "../../components/CarouselImages";
import {  useDispatch } from "react-redux";
import NewArrivals from "../../components/NewArrivals";
import DiscountedBooks from "../../components/DiscountedBooks";
import { getBooksData } from "../../redux/actions/moviesData";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksData());
  }, []);

  return (
    <div>
      <CarouselImages />
      <hr></hr>
      <NewArrivals/>
      <hr></hr>
      <DiscountedBooks/>
      <hr/>
    </div>
  );
};

export default Homepage;
