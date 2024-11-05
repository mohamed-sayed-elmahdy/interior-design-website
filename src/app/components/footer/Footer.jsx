"use client";
import React from "react";
import logoGold from "../../assets/icons/logo-white.svg";
import Image from "next/image";
import facebook from "../../assets/icons/face.svg";
import insta from "../../assets/icons/insta.svg";
import CustomButton from "../buttons/custom-button/CustomButton";
import "./footer.styles.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { FaBehance } from "react-icons/fa";

function Footer({ togglePopup, height }) {
  return (
    <div className="footer">
      <div className="inner-content text-white flex flex-col md:flex-row items-center gap-7 justify-center">
        <div className="h-[170px] md:h-[270px] mr-20 relative flex flex-col gap-6">
          <h1 className="text-[40px] font-thin text-white font-bold leading-[35px] mt-16 uppercase">
            Contact
          </h1>
          <h1 className="text-[40px] bold uppercase relative -right-20">Sh.dezigns</h1>
          <hr className="w-[74px] absolute bottom-0 md:bottom-20 -right-5"/>
        </div>

        <div className="w-[150px] text-[11px] flex flex-col">
        <span className="text-[16px] font-bold mb-4 uppercase">Egypt office</span>
          <span>office s36 mirage mall , 1st settlement , newcairo</span>
          <span>+20 101 106 7389</span>
          <span>+20 101 106 7389</span>
          <span className="">info@shdezign.com</span>
        </div>

        <div className="w-[150px] flex flex-col">
          <span className="text-[16px] font-bold mb-4 uppercase">Find us on</span>
          <a className='hover:underline font-light mb-1' target="_blank" href="https://www.behance.net/salehhassob09f">
            Behance
          </a>
          <a
            href="https://www.facebook.com/hassonadesigns?mibextid=LQQJ4d"
            target="_blank"
            className='hover:underline font-light mb-1'
          >
            FaceBook
          </a>
          <a
            href="https://www.instagram.com/sh.dezigns/profilecard/?igsh=MWdydXBibzF3Z25yYw=="
            target="_blank"
            className='hover:underline font-light mb-1'
          >
            Instagram
          </a>
        </div>

        {/* 
        <ScrollAnimation animateIn="fadeInLeft">
          <p className="font-semibold text-[16px] leading-[20px] md:w-[402px] font-bold">
            For cooperation, advertising, suppliers, contractors proposals, and
            just if you have any questions for us.
          </p>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="backInUp" duration={2}> */}
        {/* <Image src={logoGold} alt="logo" className="hidden md:inline" /> */}
        {/* <Image
            src="/logoonlywhite.png"
            width={250}
            height={250}
            alt="logo"
            className="inline md:hidden w-24 h-24"
          /> */}
        {/* </ScrollAnimation> */}

        {/* <div className="flex flex-col">
            <span className="font-bold mt-2 mb-4 flex max-sm:flex-col items-start justify-start gap-6">
             <span> General Inquieries:</span>  <span>+20 101 106 7389</span>
            </span>

            <div className="flex md:hidden flex-col ">
              <span className="font-bold text-24px z-30">
                info@shassonadesigns.com
              </span>
              <div className="flex flex-row gap-3 z-30">
                <a
                  target="_blank"
                  href="https://www.behance.net/salehhassob09f"
                >
                  <FaBehance className=" text-white text-3xl mt-2 mr-1" />
                </a>
                <a
                  href="https://www.facebook.com/hassonadesigns?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <Image src={facebook} alt="facebook" className="scale-50" />
                </a>
                <a
                  href="https://www.instagram.com/sh.dezigns/profilecard/?igsh=MWdydXBibzF3Z25yYw=="
                  target="_blank"
                >
                  <Image src={insta} alt="instagram" className="scale-50" />
                </a>
              </div>
            </div>
            <CustomButton inverted onClick={togglePopup}>
              Get In Touch
            </CustomButton>
          </div> */}

        {/* <div className="sh-designs hidden md:flex flex-col mt-0 mb-6">
          <span className=" font-bold text-24px">
          info@shassonadesigns.com
          </span>
          <div className="flex flex-row gap-3 z-30">
            <a target="_blank" href="https://www.behance.net/salehhassob09f">
              <FaBehance className=" text-white text-3xl mt-2 mr-1" />
            </a>
            <a
              href="https://www.facebook.com/hassonadesigns?mibextid=LQQJ4d"
              target="_blank"
            >
              <Image src={facebook} alt="facebook" className="scale-50" />
            </a>
            <a
              href="https://www.instagram.com/sh.dezigns/profilecard/?igsh=MWdydXBibzF3Z25yYw=="
              target="_blank"
            >
              <Image src={insta} alt="instagram" className="scale-50" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
