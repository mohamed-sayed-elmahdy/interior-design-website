"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Popup from "../components/PopUp/PopUp";
import Footer from "../components/footer/Footer";
import HowWeWork from "../components/HowweWork";
import CustomCursor from "../components/CustomCursor";
import styles from "./about.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Faq from "../components/Faq/Faq";
import SliderAbout from "../components/slider-about/SliderAbout";
import MissionVision from "../components/mission/MissionVision";


function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <Navbar togglePopup={togglePopup} />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
      <div
        style={{
          backgroundImage: "url('/aboutbk.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="overflow-hidden relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative flex flex-col items-center justify-center gap-4 mt-24 z-40 text-white text-center">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            our philosophy
          </h1>
          <p className="max-w-lg text-sm font-light px-16 md:px-0">
            At SH Designs, we believe that your surroundings should inspire
            comfort and elegance. Our spaces are meticulously crafted to be both
            functional and visually stunning, ensuring timeless appeal. We
            create bespoke designs that resonate with our clients' unique needs,
            fostering environments that you'll always cherish and
            want to return to.
          </p>
        </div>
      </div>

      {/* <div className={styles.secondSection}>
        <div className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <div className={styles.container}>
              <h1>Smart technologica solutions</h1>
              <p>
                The integration of cutting-edge technologies, such as smart home
                or advanced lighting systems, enhances the residents' quality of
                life. Innovations are seamlessly combined with the aesthetics of
                the interior.
              </p>
              <div className={styles.numbersSlider}>
                <IoIosArrowBack className={styles.icon} /> <span>01</span>
                <div className={styles.line}></div> <span>03</span>
                <IoIosArrowForward className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://hilight.design/back/wp-content/uploads/2023/12/PRIORITY_1_BEIJING_CHINA_Gym_CI_ver02_View01.jpg"
                alt="Image 1"
              />
            </div>
            <div className={styles.imageWrapperHalf}>
              <img
                src="https://hilight.design/back/wp-content/uploads/2019/03/Hi_light_PRIORITY_1_BEIJING_CHINA_AP1_Living_Kitchen_BB_View01_Post-356566.jpg"
                alt="Image 2"
              />
            </div>
          </div>
        </div>
      </div> */}

      <SliderAbout />

      <div className={styles.thirdSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/thirdSectionAbout.jpeg"
            className="h-112 w-114"
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.numbersContainer}>
          <div className={styles.textAndNumber}>
            <h1 className={styles.number}>60</h1>
            <p className={styles.text}>
              created and <br /> released projects
            </p>
          </div>
          <div className={styles.textAndNumber}>
            <h1 className={styles.number}>112+</h1>
            <p className={styles.text}>
              partners and <br /> brands friends
            </p>
          </div>
          <div className={styles.textAndNumber}>
            <h1 className={styles.number}>20</h1>
            <p className={styles.text}>
              architects and <br /> designers
            </p>
          </div>
          <div className={styles.textAndNumber}>
            <h1 className={styles.number}>8+</h1>
            <p className={styles.text}>
              years of <br /> experience
            </p>
          </div>
          {/* <div className={styles.textAndNumber}>
            <h1 className={styles.number}>3</h1>
            <p className={styles.text}>
              offices of <br /> HILIGHT
            </p>
          </div> */}
        </div>
        {/* <div
          className={`${styles.absoulteImageContainer} ${styles.hideOnSmall}`}
        >
          <Image src="/bathroom.png" alt="image" width={1000} height={1000} />
        </div> */}
      </div>
      {/* <div className={styles.CoFounderSection}>
        <div className={styles.leftSide}>
          <h1 className={styles.name}>Yevhen Zahorodnii</h1>
          <p className={styles.position}>Founder</p>
          <p className={styles.paragraph}>
            I enjoy working on projects that go beyond just aesthetics. Everyday
            people all over the world face challenges and we, in HILIGHT,
            perceive them as professional ones and an important inspiration for
            work. It motivates us to create spaces both functional and stylish.
            Interiors and architecture, which keep being relevant for years and
            suit not only the current, but also the future needs of our clients.
          </p>
          <div className={styles.imageContainer}>
            <Image src="/bathroom.png" alt="image" width={1900} height={1900} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageContainer}>
            <Image
              src="/coFounder.jpeg"
              alt="image"
              width={1900}
              height={1900}
            />
          </div>
          <p>
            Our team consists of gifted professionals who release all projects
            as their personal creative achievements with the best results. We're
            not ready to be sufficient with what we already have. We always
            develop something new passionately and get better with every new
            design.
          </p>
        </div>
      </div> */}
      <HowWeWork />
      <MissionVision />
     
      <Footer togglePopup={togglePopup} />
    </div>
  );
}

export default Page;
