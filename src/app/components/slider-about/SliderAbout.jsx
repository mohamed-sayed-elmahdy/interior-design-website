'use client'
import React, {useState, useEffect, useRef}  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressBar from "../progress-bar/ProgressBar";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import Image from "next/image";
import aboutImg from "../../assets/header-3.png";
import header1 from "../../assets/header-1.jpg";
import last from "../../assets/header-2.png";


function SliderAbout() {
  const [slideStart, SetSlideStart] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [initialSlide, setInitialSlide] = useState(1);
  const [counter, setCounter] = useState(0);
  const duration = 3000; // Total duration in milliseconds
  const intervalTime = 100; // Interval time in milliseconds
  const increment = 100 / (duration / intervalTime);
  const slider = useRef(null);

  useEffect(() => {
    const incrementCounter = () => {
      SetSlideStart(prevCounter => prevCounter + 1);
    };
    const intervalId = setInterval(incrementCounter, 3500);
    if(slideStart > 3){
      SetSlideStart(1)
    }
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slideStart]);

  const settings = {
    className: "slider variable-width center lg:h-[600px]",
    infinite: true,
    fade: false,
    centerMode: false,
    autoplay: true,
    duration:4000,
    cssEase: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    initialSlide: initialSlide,
    dots: false,
    vertical: false,
    autoplayspeed: 5000,
  };

  useEffect(() => {
    const duration = 3000; // Total duration in milliseconds
    const intervalTime = 100; // Interval time in milliseconds
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + increment;
        } else {
          setCounter((prevCounter) => prevCounter + 1);
          return 0; // Reset to 0 when it reaches 100%
        }
      });
    }, intervalTime); // Run every intervalTime ms
    return () => clearInterval(interval);
  }, []);

  const handleNextClick = () => {
    slider?.current?.slickNext();
    setPercentage(0)
    SetSlideStart(slideStart + 1);
    if (slideStart === 3) {
      SetSlideStart(1);
    }
  };

  const handlePrevClick = () => {
    slider?.current?.slickPrev();
    setPercentage(0)
    SetSlideStart(slideStart - 1);
    if (slideStart === 1) {
      SetSlideStart(3);
    }
  };

  useEffect(() => {
    setInitialSlide(1);
  }, []);

  return (
    <div className="overflow-hidden flex flex-col justify-center md:gap-1 px-6 md:px-0 items-center my-12 md:my-0 lg:my-20">
      <div className="flex flex-col w-full md:w-2/3 gap-4 lg:gap-1 items-center lg:pt-6 justify-center md:items-start lg:items-center md:mt-12 lg:mt-0">
        <div className="flex flex-col w-[80%] md:w-2/3 lg:w-3/4 items-start justify-center">
            <h1 className="text-2xl lg:text-3xl font-extrabold text-black mb-4 uppercase">About Us</h1>
            <p className="text-black text-[12px] lg:text-[14px] text-[#9199AB]">
            Our journey started since 2016 , we stands as a beacon of excellence in the
            fields of interior design, architecture, and landscape projects. With an
            unwavering commitment to exceeding client expectations, our studio has
            become synonymous with creating spaces that not only meet but surpass the
            unique needs and desires of our valued clientele.
            </p> <br/>
            <p className="text-black text-[12px] lg:text-[14px] text-[#9199AB] mt-2">
            At Our Studio, we believe in the power of details and the transformative
            impact of staying attuned to evolving trends and styles. Our dedicated team
            of professionals is adept at curating designs that not only reflect the client's
            vision but also encapsulate the nuances of contemporary aesthetics. We
            understand that each project is a canvas with its own distinct narrative, and
            our purpose is to bring that narrative to life with precision and flair
            </p>
        </div>
      <div className="grid grid-cols-1 items-center align-center justify-center w-2/3">
        <div className="flex flex-row h-[75px] md:h-[75px] gap-2 w-2/3 md:w-full items-center justify-center self-end">
          <div className="flex flex-row items-center">
            <IoMdArrowDropleft
              style={{ fill: "gray", cursor: "pointer" }}
              onClick={handlePrevClick}
            />
            <span className="text-black text-[11px]">{slideStart}</span>
          </div>

          <ProgressBar percentage={percentage}/>

          <div className="flex flex-row items-center">
            <span className="text-black text-[11px]">3</span>
            <IoMdArrowDropright
              style={{ fill: "gray", cursor: "pointer" }}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
      </div>

      <div className="w-full px-12 md:px-24 h-auto">
      <Slider ref={slider} {...settings}>
      <div className="">
          <Image src={aboutImg} alt="about" className=" h-auto w-[100%] w-full" />
          {/* <p className="py-8 px-56 uppercase text-white text-5xl absolute top-60">
            ALLEGRIA SODIC
          </p> */}
          {/* <p className="header-subtext py-8 px-56 uppercase text-white text-[11px] absolute top-80">
            Discover More
          </p> */}
        </div>
        <div className="h-full">
          <Image src={header1} alt="cosmo" className=" h-auto w-[100%]" />
          {/* <p className="p-8 px-56 uppercase text-white text-5xl absolute top-60">
            Riyadh Villa
          </p> */}
          {/* <p className="header-subtext py-8 px-56 uppercase text-white text-[11px] absolute top-80">
            Discover More
          </p> */}
        </div>
        <div className="">
          <Image src={last} alt="mansion 2" className=" h-auto w-[100%]" />
          {/* <p className="p-8 px-56 uppercase text-white text-5xl absolute top-20">
            Simit Bakery
          </p> */}
          {/* <span className="header-subtext py-8 px-56 uppercase text-white text-[11px] absolute top-80">
            Discover More
          </span> */}
        </div>

        {/* <div className="">
          <Image src={newImg} alt="mansion 2" className="image" />
          <p className="p-8 px-56 uppercase text-white text-5xl absolute top-20">
            Simit Bakery
          </p>
          <span className="header-subtext py-8 px-56 uppercase text-white text-[11px] absolute top-80">
            Discover More
          </span> 
        </div> */}
      </Slider>
         
      </div>
    </div>
  );
}

export default SliderAbout;
