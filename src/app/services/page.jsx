"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Popup from "../components/PopUp/PopUp";
import Image from "next/image";
import Faq from "../components/Faq/Faq";

function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Navbar togglePopup={togglePopup} />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
      <div className="mt-32">
        <div className="flex flex-col md:flex-row md:justify-around py-6 md:py-16 px-6 md:px-24">
          <h1 className="mb-4 md:mt-0 text-black lg:text-4xl md:text-3xl text-2xl w-full md:w-1/2 font-bold">
            OUR SERVICES
          </h1>
          <p className="max-w-[400px] text-[15px] text-gray-500">
            we offer a comprehensive range of services, seamlessly integrating
            architecture, interior design, production design, branding, and
            contracting to bring your visions to life with precision and
            creativity.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around w-full relative md:h-[550px] my-10 max-md:px-6">
          <div className="flex flex-col w-full lg:w-1/2  md:p-16 relative ">
            <h1 className="text-black md:text-4xl text-2xl font-bold mb-10">
              1- Architecture
            </h1>
            <p className="text-gray-500 w-full lg:w-[400px]">
              Our architecture services involve the innovative and practical
              design of buildings and physical structures. We focus on creating
              spaces that are not only aesthetically pleasing but also
              functional and sustainable.
            </p>
          </div>
          <div className=" W-1/2  md:w-[800px] lg:m-0 max-lg:mt-20">
            <Image
              width={700}
              height={300}
              src="/Service111.jpg"
              alt="service"
            />
          </div>
        </div>
        <div className=" flex  md:flex-row md:justify-around items-center mb-20 w-full px-6 lg:px-12 xl:px-20 flex-wrap-reverse">
          <div className="w-full md:w-1/2 msx-sm:h-[250px] md:h-[500px] mt-6 ">
            <Image
              width={1500}
              height={1500}
              src="/4.jpg"
              className=" lg:w-[450px] lg:h-[550px] w-[350px] "
              alt="service"
            />
          </div>
          <div className="mt-3 md:mt-0 w-full md:w-1/2 flex flex-col items-center">
            <h1 className="text-black text-start md:text-4xl text-2xl w-full md:w-2/3 font-bold my-6 md:mb-10">
              2- Interior Design
            </h1>
            <p className="w-full md:w-2/3">
              Elevating interior spaces is our expertise. We go beyond
              decoration, strategically planning layouts and selecting elements
              to optimize functionality and create visually appealing
              environments tailored to our clients' needs
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around items-start md:items-center mb-28 w-full px-6 lg:px-12 xl:px-20 flex-wrap my-36">
          <div className="md:w-[370px] mb-3 md:b-0 ">
            <h1 className="text-black md:text-4xl text-2xl font-bold my-3 md:mb-10 ">
              3- Production Design
            </h1>
            <p className="w-full md:w-2/3">
              We are able to customize every single project with unique pieces
              of design.
            </p>
          </div>
          <div className="flex justify-center items-center max-md:mt-12">
            <Image
              width={1500}
              height={1500}
              src="/main.jpg"
              alt="service"
              className="sm:w-[400px]   md:w-[500px] xl:w-[650px]"
            />
          </div>
        </div>



        <div className="flex  md:flex-row justify-evenly xl:justify-between items-start md:items-center mb-32 w-full px-6 lg:px-8 flex-wrap-reverse my-36">
       
          <div className="flex justify-center items-center max-md:mb-10">
            <Image
              width={1500}
              height={1500}
                src="/MIRAGE.jpg"
              alt="service"
              className="sm:w-[400px] md:w-[500px] xl:w-[650px]"
            />
          </div>
          <div className="max-w-[365px] xl:w-[510px] mb-3 md:b-0 xl:mr-72">
            <h1 className="text-black md:text-4xl text-2xl font-bold my-3 md:mb-10">
            4- Branding
            </h1>
            <p className="w-[calc(100% - 120px)]">
            Crafting unique and recognizable identities is at the core of our
              branding services. We develop cohesive visual elements, logos,
              messaging, and brand strategies to ensure a consistent and
              impactful presence across platforms.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around items-center mb-20 w-full px-6 md:px-24">
          <div className="w-full md:w-1/2">
            <h1 className="text-black text-4xl w-full md:w-1/2 font-bold my-6 md:mb-10">
              5- Contractors
            </h1>
            <p className="w-full md:w-2/3">
              As project overseers, our contracting services involve
              coordinating and managing construction teams. We ensure the
              seamless execution of design visions, prioritizing quality
              craftsmanship and timely delivery.
            </p>
          </div>
          <div className="W-1/2 h-[280px] msx-sm:h-[250px] md:h-[500px] mt-5 md:m-0">
            <Image
              width={1500}
              height={1500}
              src="/s.jpeg"
              alt="service"
              className=" md:w-[650px]"
            />
          </div>
        </div>

        {/* <div className="p:6 md:p-24 mb-20">
          <div className="flex flex-col">
            <h1 className="text-black text-4xl font-bold mb-10 uppercase text-center">
              Join The Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 px-20 gap-3 md:gap-8">
              <Image src={job1} alt="job" className="w-full" />
              <Image src={job2} alt="job" className="w-full" />
              <Image src={job3} alt="job" className="w-full" />
              <Image src={job4} alt="job" className="w-full" />
              <Image src={job5} alt="job" className="w-full" />
            </div>
          </div>
        </div> */}
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Page;
