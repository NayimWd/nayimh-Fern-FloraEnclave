import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Navigation } from "swiper/modules";
import CircularProgressBar from "./Ratings/CircularProgressBar";
import LineProgressBar from "./Ratings/LineProgressBar";
import CustomerReview from "./Ratings/CustomerReview";

const ProductReview = () => {
  const averageRating = 4.8;

  const ratings = [60, 23, 10, 5, 2];
  
  return (
    <div className="">
        <p className=" text-xl sm:text-2xl md:text-[30px] leading-[43px] font-lato">Product Review  </p>
        <div className="mt-10 border rounded grid juce items-center p-3 xsm:p-5 md:p-8">
            <div className="col-start-1 col-end-12 md:col-end-2 ">
                <div className=" flex justify-center md:justify-start items-center gap-8">
                
                <CircularProgressBar rating={averageRating}/>
                <div className="flex flex-col">
                <p className="text-2xl text-dark_green">★★★★★</p>
                <p className="text-darker_green">From 1.2k Customer</p>
                </div>
                </div>
            </div>
            <div className="col-start-1 md:col-start-2 col-end-12 mt-8 md:mt-0">
             
            <LineProgressBar ratings={ratings}/>
          
            </div>
        </div>
        <CustomerReview/>
    </div>
  )
}

export default ProductReview