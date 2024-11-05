"use client"
import { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects/Projects";
import Carausel from "./components/Carousel";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Popup from "./components/PopUp/PopUp";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import Loading from "./components/loading/Loading";


export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <div>
      <Navbar togglePopup={togglePopup} />
      <Carausel />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
      <AboutUs />
      <Projects togglePopup={togglePopup} /> 
      {/* <Gallery /> */}
      <PartnersSection />
      <Footer  togglePopup={togglePopup}/> 
    </div>
  );
}
