"use client";
import React, { useRef } from "react";
import styles from "./PortfolioProjects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import big from "../../assets/header-3.png";
import small1 from "../../assets/projects-small-1.png";
import small3 from "../../assets/projects-small-3.png";
import small4 from "../../assets/projects-small-4.png";
import small from "../../assets/projects-small.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import newCairo from "../../assets/projects/new-cairo-apartment/3.webp";
import riyadahVilla from "../../assets/projects/riyadah-villa/3.webp";
import simit from "../../assets/projects/semit-bakery/1.webp";
import roadLink from '../../assets/projects/road-link/main.webp'
import master from "../../assets/projects/master-express/main.png";
import lake from "../../assets/projects/lake-view/1.webp";

function PortfolioProjects({ showHouse, showApartments, showCommerce }) {
  const slider = useRef(null);
  const settings = {
    className: "slider variable-width center",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: false,
    initialSlide: 1,
    dots: false,
    centerMode: true,
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

  return (
    <section className="h-auto bg-black flex flex-col items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center font-semibold">
        <h1 className="text-center text-white text-[36px] my-6 font-bold">
          OUR PROJECTS
        </h1>
        <p className="px-4 text-center text-[16px] text-[#6B6B6B] md:w-[584px] leading-[29.05px] mb-8">
          We released more than 60 commercial and private projects all around
          the world, providing our clients with custom solutions in stylish,
          functional, and well-thought-out designs.
        </p>
      </div>

      <div className="flex flex-col p-8 justify-center max-w-[1356px]">
        <ScrollAnimation
          animateIn="fadeInUp"
          className={`relative w-full h-full mt-2  ${
            showHouse ? "block" : "hidden"
          }`}
        >
          <Link
            href="projects/sodic-allegria-villa"
            className="group w-full h-full cursor-pointer"
          >
            <Image
              src={big}
              className="w-full h-full object-cover"
              alt="Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
              <p>West Cairo </p>
              <p>2022</p>
              <p>1600m2</p>
            </div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-3xl font-semibold">Sodic Allegria Villa</h1>
            </div>
          </Link>
        </ScrollAnimation>
        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)]  h-auto ${
              showHouse ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className=" group w-full h-full"
                href="projects/lake-view-villa"
              >
                <Image
                  src={lake}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition  duration-300 font-thin">
                  <p>New Cairo</p>
                  <p>2022</p>
                  <p>500m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Lake View Villa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)]  h-auto ${
              showHouse ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative h-full">
              <Link
                href="projects/palm-hills-villa"
                className="group w-full h-full cursor-pointer"
              >
                <Image
                  src={small3}
                  className="w-full h-full object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2022</p>
                  <p>1250m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Palm Hills Villa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>{" "}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showCommerce ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                href="projects/master-express"
                className="group w-full h-full"
              >
                <Image
                  src={master}
                  className="w-full  h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition  duration-300 font-thin">
                  <p>Shrouk City</p>
                  <p>2023</p>
                  <p>250m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300">
                  <h1 className="text-3xl font-semibold">Master Express</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showCommerce ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/simit-bakery"
              >
                <Image
                  src={simit}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={1500}
                  height={1500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>Riyadh</p>
                  <p>2022</p>
                  <p>110m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Simit Bakery</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showCommerce ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link className=" group w-full h-full" href="projects/road-link">
                <Image
                  src={roadLink}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={1500}
                  height={1500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p> New Cairo</p>
                  <p>2023</p>
                  <p>1150m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Road Link</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)]  h-auto ${
              showCommerce ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative h-full">
              <Link
                href="projects/hareem-spa"
                className="group w-full h-full cursor-pointer"
              >
                <Image
                  src={small}
                  className="w-full h-full object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo </p>
                  <p>2023</p>
                  <p> 280m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Hareem Spa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showHouse ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/one-kattamya-villa "
              >
                <Image
                  src="/kATTAMYA/main.jpg"
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={1500}
                  height={1500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p> New Cairo </p>
                  <p>2020  </p>
                  <p>1250m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">One Kattamya Villa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showHouse ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative h-full">
              <Link
                href="projects/grand-heights-villa"
                className="group w-full h-full cursor-pointer"
              >
                <Image
                  src={small4}
                  className="w-full h-full object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>West Cairo</p>
                  <p>2021</p>
                  <p>650m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">
                    Grand Heights Villa
                  </h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showApartments ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className=" group w-full h-full"
                href="projects/new-cairo-apartment"
              >
                <Image
                  src={newCairo}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2023</p>
                  <p>200m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">
                    New Cairo Appartment
                  </h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showApartments ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative h-full">
              <Link
                href="projects/apartment"
                className="group w-full h-full cursor-pointer"
              >
                <Image
                  src={small1}
                  className="w-full h-full object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2023</p>
                  <p>200m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Apartment</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full mt-2 ">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showCommerce ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className=" group w-full h-full"
                href="projects/world-trade-center"
              >
                <Image
                  src="/WorldTradeCenter.png"
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={1500}
                  height={1500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p> Cairo</p>
                  <p>2024</p>
                  <p>450m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">World Trade Center</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)] h-full ${
              showHouse ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/hetten-villa"
              >
                <Image
                  src={riyadahVilla}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>Riyadh</p>
                  <p>2023</p>
                  <p>750m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Hetten Villa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full ">
          <ScrollAnimation
            animateIn="fadeInRight"
            className={`md:w-[calc(50%-0.25rem)] h-full mt-2 ${
              showApartments ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link
                className=" group w-full h-full"
                href="projects/apartment-2"
              >
                <Image
                  src="/apart12.webp"
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={3500}
                  height={3500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2023</p>
                  <p>150m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Apartment 2</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className={`md:w-[calc(50%-0.25rem)] h-full mt-2 ${
              showApartments ? "block flex-1" : "hidden"
            }`}
          >
            <div className="relative">
              <Link className="group w-full h-full" href="projects/lake-view-2">
                <Image
                  src="/lakeView2.webp"
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                  width={3500}
                  height={3500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2022</p>
                  <p>450m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">LAKE VIEW 2</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="fadeInUp"
          className={`relative w-full h-full mt-2  ${
            showApartments ? "block" : "hidden"
          }`}
        >
          <Link
            href="projects/lake-view-3"
            className="group w-full h-full cursor-pointer"
          >
            <Image
              src="/lake-view-6.jpg"
              className="w-full h-full object-cover"
              alt="Image"
              width={3500}
              height={3500}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
              <p>New Cairo </p>
              <p>2022</p>
              <p>330m2</p>
            </div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-3xl font-semibold">LAKE VIEW 3</h1>
            </div>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default PortfolioProjects;
