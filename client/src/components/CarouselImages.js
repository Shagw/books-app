import React from "react";
import "./CarouselImages.css";
import {Carousel} from "react-bootstrap";

const CarouselImages = () => {
  const img_url = [
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/81_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/84_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/83_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/82_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/78_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg",
  ];

  return (
    <div>
      <img
        src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/1_alltimefavourite.jpg"
        className="beforeCarouselImage"
      />
      <Carousel interval={5000} slide={true} touch={true} controls={true} className="carousel-image">
        {img_url.map((items,index) => (
          <Carousel.Item key={index+items}>
            <img src={items} className="carousel-images"/>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
