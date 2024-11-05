"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import aboutImg from "../assets/header-3.png";
import header1 from "../assets/header-1.jpg";
import last from "../assets/header-2.png";
import locationIcon from "../assets/icons/location-red.svg";
import facebook from "../assets/icons/face.svg";
import insta from "../assets/icons/insta.svg";
import bb from "../assets/icons/b.svg";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import ProgressBar from "./progress-bar/ProgressBar";
import { FaBehance } from "react-icons/fa";

const Carausel = () => {
  const [slideStart, SetSlideStart] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [initialSlide, setInitialSlide] = useState(1);
  const [counter, setCounter] = useState(0);
  const slider = useRef(null);

  useEffect(() => {
    setInitialSlide(1);
  }, []);

  const settings = {
    className: "slider variable-width center",
    infinite: true,
    fade: true,
    centerMode: false,
    autoplay: true,
    autoplayspeed: 400,
    cssEase: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    initialSlide: initialSlide,
    dots: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const incrementCounter = () => {
      SetSlideStart((prevCounter) => prevCounter + 1);
    };
    const intervalId = setInterval(incrementCounter, 3500);
    if (slideStart > 3) {
      SetSlideStart(1);
    }
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slideStart]);

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
    setPercentage(0);
    SetSlideStart(slideStart + 1);
    if (slideStart === 3) {
      SetSlideStart(1);
    }
  };

  const handlePrevClick = () => {
    slider?.current?.slickPrev();
    setPercentage(0);
    SetSlideStart(slideStart - 1);
    if (slideStart === 1) {
      SetSlideStart(3);
    }
  };

  return (
    <div className="slider-container relative overflow-hidden">
      <Slider ref={slider} {...settings}>
        <div className="flex flex-col">
          <Image src={aboutImg} alt="about" className="image" />
          <p className="p-8 md:px-56 uppercase text-white text-xl sm:text-3xl lg:text-5xl absolute top-4 sm:top-24 sm:ml-12 lg:ml-0 lg:top-60">
            ALLEGRIA SODIC
          </p>
          <p className="header-subtext py-8 px-12 md:px-56 uppercase text-white underline tracking-wider md:no-underline text-[8px] md:text-[11px] absolute top-12 sm:top-36 lg:top-80 mr-12 sm:ml-0">
            <Link
              href="projects/sodic-allegria-villa"
              className="cursor-pointer"
            >
              Discover More
            </Link>
          </p>
        </div>
        <div className="">
          <Image src={header1} alt="cosmo" className="image" />
          <p className="p-8 md:px-56 uppercase text-white text-xl sm:text-3xl lg:text-5xl absolute top-4 sm:top-24 sm:ml-12 lg:ml-0 lg:top-60">
            Hetten Villa
          </p>
          <p className="header-subtext py-8 px-12 md:px-56 uppercase text-white underline tracking-wider md:no-underline text-[8px] md:text-[11px] absolute top-12 sm:top-36 lg:top-80">
            <Link href="projects/hetten-villa" className="cursor-pointer">
              Discover More
            </Link>
          </p>
        </div>
        <div className="">
          <Image src={last} alt="mansion 2" className="image" />
          <p className="p-8 md:px-56 uppercase text-white text-xl sm:text-3xl lg:text-5xl absolute top-4 sm:top-24 sm:ml-12 lg:ml-0 lg:top-60">
            Simit Bakery
          </p>
          <span className="header-subtext py-8 px-12 md:px-56 uppercase text-white underline md:no-underline tracking-wider  text-[8px] md:text-[11px] absolute top-12 sm:top-36 lg:top-80">
            <Link href="projects/simit-bakery" className="cursor-pointer">
              Discover More
            </Link>
          </span>
        </div>
      </Slider>

      <div
        className="w-full bg-transparent absolute bottom-6 flex flex-row
       justify-start items-center md:gap-20 md:py-4 md:ml-16"
      >
        <div className="hidden md:flex flex-row gap-4 ">
          <a href="https://www.behance.net/salehhassob09f" target="_blank">
            <FaBehance  className="scale-[40%] text-white text-5xl" />
          </a>
          <a
            href="https://www.facebook.com/hassonadesigns?mibextid=LQQJ4d"
            target="_blank"
          >
            <Image src={facebook} alt="facebook" className="scale-[40%]" />
          </a>
          <a
            href="https://www.instagram.com/sh.dezigns/profilecard/?igsh=MWdydXBibzF3Z25yYw=="
            target="_blank"
          >
            <Image src={insta} alt="instagram" className="scale-[40%]" />
          </a>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 md:gap-16 px-1 px-5 ml-10 lg:ml-0">
          <div className="flex flex-row py-[1px] lg:py-[4px] gap-1 px-[7px] lg:px-[18px] bg-[#9EA4AA] font-bold rounded-[25px] border-2 border-white">
            <Image src={locationIcon} alt="location" className="" />
            <span className="font-bold text-white text-[10px]">Global</span>
          </div>
          <span className="text-white font-bold text-[11px] hidden md:block">
            +20 101 106 7389
          </span>
          <span className="text-white font-bold text-[11px] hidden md:block">
             info@shdezign.com
          </span>
        </div>
      </div>

      <div className="absolute grid grid-cols-1 flex-row w-2/3 lg:w-1/4 flex-grow bottom-12 md:bottom-40 right-20">
        <div className="flex flex-row gap-2 items-center w-2/3 justify-center">
          <div className="flex flex-row items-center">
            <IoMdArrowDropleft
              style={{ fill: "white", cursor: "pointer" }}
              onClick={handlePrevClick}
            />
            <span className="text-white text-[12px]">{slideStart}</span>
          </div>

          <ProgressBar percentage={percentage} bgColor={"white"} />

          <div className="flex flex-row items-center">
            <span className="text-white text-[12px]">3</span>
            <IoMdArrowDropright
              style={{ fill: "white", cursor: "pointer" }}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carausel;
