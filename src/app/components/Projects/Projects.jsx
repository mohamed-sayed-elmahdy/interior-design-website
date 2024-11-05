"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import big from "../../assets/header-3.png";
import small1 from "../../assets/projects-small-1.png";
import small3 from "../../assets/projects-small-3.png";
import small4 from "../../assets/projects-small-4.png";
import small from "../../assets/projects-small.png";
import newCairo from "../../assets/projects/new-cairo-apartment/3.webp";
import kattamya from '../../assets/projects/one-kattamya-villa/1.png'
import master from '../../assets/projects/master-express/main.png'
import semit from '../../assets/projects/semit-bakery/1.webp'
import lake from '../../assets/projects/lake-view/1.webp'
import roadLink from '../../assets/projects/road-link/main.webp'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import CustomButton from "../buttons/custom-button/CustomButton";

function Projects({ togglePopup }) {
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
        <p className="text-center text-[16px] text-[#6B6B6B] w-full md:w-[584px] leading-[29.05px] px-8 md:px-0 mb-8">
          We released more than 60 commercial and private projects all around
          the world, providing our clients with custom solutions in stylish,
          functional, and well-thought-out designs.
        </p>
      </div>

      

      <div className="flex flex-col p-8 justify-center max-w-[1356px]">

      <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
          <ScrollAnimation
            animateIn="fadeInRight"
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link href="projects/master-express" className="group w-full h-full">
                <Image
                  src={master}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
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
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link href="projects/simit-bakery" className="group w-full h-full">
                <Image
                  src={semit}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>Riyadh</p>
                  <p>2023</p>
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
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/road-link"
              >
                <Image
                  src={roadLink}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition font-thin duration-300">
                  <p>New Cairo</p>
                  <p>2023  </p>
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
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link href="projects/hareem-spa" className="group w-full h-full">
                <Image
                  src={small}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>New Cairo</p>
                  <p>2023</p>
                  <p>280m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">Hareem Spa</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center my-2 w-full">
          <ScrollAnimation animateIn="fadeInUp" className="w-full h-full">
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/sodic-allegria-villa"
              >
                <Image
                  src={big}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>West Cairo</p>
                  <p>2022</p>
                  <p>1600m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">
                    Sodic Allegria Villa
                  </h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2  w-full">
          <ScrollAnimation
            animateIn="fadeInRight"
            className="md:w-[calc(50%-0.25rem)] h-full"
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
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>New Cairo</p>
                  <p>2022</p>
                  <p>500m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">
                    Lake View Villa
                  </h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/palm-hills-villa"
              >
                <Image
                  src={small3}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
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
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center my-2 w-full">
          <ScrollAnimation animateIn="fadeInUp" className="w-full h-full">
            <div className="relative">
              <Link
                className="group w-full h-full"
                href="projects/one-kattamya-villa"
              >
                <Image
                  src={kattamya}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>New Cairo  </p>
                  <p>2020</p>
                  <p>1250m2</p>
                  
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h1 className="text-3xl font-semibold">
                    One Kattamya Villa 
                  </h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
          <ScrollAnimation
            animateIn="fadeInRight"
            className="md:w-[calc(50%-0.25rem)] h-full"
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
            className="md:w-[calc(50%-0.25rem)] h-full"
          >
            <div className="relative">
              <Link href="projects/apartment" className="group w-full h-full">
                <Image
                  src={small1}
                  className="w-full h-[381.5px] md:h-[567.5px] object-cover"
                  alt="Image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 font-thin">
                  <p>New Cairo</p>
                  <p>2023</p>
                  <p>200m2</p>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300">
                  <h1 className="text-3xl font-semibold">Apartment</h1>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mt-2 mb-32 px-2 md:px-6">
        <div className="md:w-1/2 px-1 md:px-10 self-start">
          <h1 className="px-8 text-white text-[22px] md:text-[36px] leading-[43.57px] md:w-[430px]">
            LET'S DESIGN THE NEXT MASTERPIECE
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-16 w-full md:w-1/2 px-6">
          <p className="text-[#6B6B6B]  px-2 md:px-8">
            Fill out the form below if you want to order the project, ask for
            prices, or get an offer. Our manager will contact you as soon as
            possible to clarify all the details.
          </p>
          <div>
            <button
              className=" md:ml-8 bg-black text-white text-center text-xs py-2 font-semibold px-8 hover:bg-white hover:text-black border border-white "
              onClick={togglePopup}
            >
              Make a Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
