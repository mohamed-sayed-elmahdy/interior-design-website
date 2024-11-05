"use client"
import React, {useState} from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar'
import Popup from "../components/PopUp/PopUp";

function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <Navbar togglePopup={togglePopup} />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
      <Footer togglePopup={togglePopup}/>
    </div>
  )
}

export default Page;
