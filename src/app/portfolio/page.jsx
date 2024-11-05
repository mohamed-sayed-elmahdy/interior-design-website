"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PortfolioProjects from "../components/PortfolioProjects/PortfolioProjects";
import CustomButton from "./../components/buttons/custom-button/CustomButton";
import Popup from "./../components/PopUp/PopUp";

function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showHouse, setShowHouse] = useState(true);
  const [showApartments, setShowApartments] = useState(true);
  const [showCommerce, setShowCommerce] = useState(true);

  const handleAllClick = () => {
    setShowHouse(true);
    setShowApartments(true);
    setShowCommerce(true);
  };

  const handleHouseClick = () => {
    setShowHouse(true);
    setShowApartments(false);
    setShowCommerce(false);
  };

  const handleApartmentsClick = () => {
    setShowHouse(false);
    setShowApartments(true);
    setShowCommerce(false);
  };

  const handleCommerceClick = () => {
    setShowHouse(false);
    setShowApartments(false);
    setShowCommerce(true);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <Navbar togglePopup={togglePopup} />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-24 mt-48 px-10 md:px-32">
          <div className="flex items-start justify-start flex-[1.9] self-start">
            <h1 className="w-full text-3xl text-[#080808] font-montserrat font-bold leading-none">
              OUR PROJECTS
            </h1>
          </div>
          <div className="flex items-start justify-start flex-[1.1] flex-col">
            <p className="p1 font-light leading-6 text-xs text-[#3a3e4b]">
              Years of creating allowed us to show you a portfolio of more than
              150 projects of different sizes, types, and locations. Common
              things for our projects are being attentive to details and modern
              solutions. We are masterminding new ideas to make something
              special. So we proudly welcome you to see more.
            </p>
            <ul className="flex justify-center items-center gap-10 mt-5 text-[#828282] text-[12px]">
              <li
                className={`font-normal leading-6 text-sm cursor-pointer ${
                  showHouse && showApartments && showCommerce
                    ? "text-[#000000]"
                    : ""
                }`}
                onClick={handleAllClick}
              >
                All
              </li>
              <li
                className={`cursor-pointer ${
                  showHouse && !showApartments && !showCommerce
                    ? "text-[#000000]"
                    : ""
                }`}
                onClick={handleHouseClick}
              >
                House
              </li>
              <li
                className={`cursor-pointer ${
                  !showHouse && showApartments && !showCommerce
                    ? "text-[#000000]"
                    : ""
                }`}
                onClick={handleApartmentsClick}
              >
                Apartments
              </li>
              <li
                className={`cursor-pointer ${
                  !showHouse && !showApartments && showCommerce
                    ? "text-[#000000]"
                    : ""
                }`}
                onClick={handleCommerceClick}
              >
                Commerce
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PortfolioProjects
        showHouse={showHouse}
        showApartments={showApartments}
        showCommerce={showCommerce}
      />
      <div className="flex justify-start md:justify-between items-center gap-5 mb-24 mt-48 md:px-32 px-2 overflow-hidden flex-col md:flex-row">
        <div className="flex items-start justify-start flex-[1.9] md:self-start">
          <h1 className="md:mb-48 text-3xl text-[#080808] font-montserrat font-bold leading-normal max-w-[350px]">
            LET'S CREATE THE NEW MASTERPIECE
          </h1>
        </div>
        <div className="flex items-start md:justify-end flex-[1.1] flex-col md:self-end">
          <p className=" font-light leading-6 text-xs text-[#3a3e4b] max-w-[332px]">
            Fill out the form below if you want to order the project, ask for
            prices, or get an offer. Our manager will contact you as soon as
            possible to clarify all the details.
          </p>
          <div className=" items-center md:p-0 py-1 mt-4">
            <button
              className="bg-white text-black hover:bg-black hover:text-white text-center text-xs py-2 font-semibold px-8  border border-black"
              onClick={togglePopup}
            >
              Make a Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
