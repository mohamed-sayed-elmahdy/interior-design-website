"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Administration",
      answer: (
        <div className="flex flex-wrap gap-8 ">
          <div className="flex flex-col gap-4 ">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className="bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
    {
      question: "Site Engineer",
      answer: (
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className="bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
    {
      question: "Designer",
      answer: (
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className="bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
    {
      question: "Technical Engineer",
      answer: (
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className=" border-collapse bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
    {
      question: "Site Supervision",
      answer: (
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className=" border-collapse bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
    {
      question: "Internship",
      answer: (
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <strong>Areas of responsibility:</strong>
            <strong>Hiring specifications:</strong>
            <button className=" border-collapse bg-black text-white px-4 py-2 mt-8 transition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black">
              Send a CV
            </button>
          </div>
        </div>
      ),
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-16 mx-auto w-full text-black">
      <div className="my-10 mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-end gap-4 p-2">
          <div>
            <h1 className="text-3xl font-bold mt-16">Join Our team</h1>
            <p className="max-w-md font-light mt-1 text-base">
              If you like our vision and style or you have ideas that you would
              like to share, and if you have ambitions and desire to develop,
              become a part of SH Designs.
            </p>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <a
              href="mailto:info@shassonadesigns.com"
              className="text-black font-medium md:mr-12"
            >
              info@shassonadesigns.com
            </a>
            <div className="flex items-center gap-10 font-bold">
              <a href="https://www.facebook.com/hassonadesigns?mibextid=LQQJ4d">
                Fb
              </a>
              <a href="https://www.behance.net/salehhassob09f">Be</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap  my-20 mx-auto transition-all duration-500 border-collapse">
          {questions.map((item, index) => (
            <div
              key={index}
              className="w-full border-t border-b border-black py-10 px-4 flex flex-col gap-6 cursor-pointer transition-all duration-500  border-collapse"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center text-lg font-semibold transition-all duration-500">
                <div className="flex items-center transition-all duration-500">
                  <div className="max-md:mr-6 mr-14 text-base font-bold transition-all duration-500">{`0${
                    index + 1
                  }`}</div>
                  {item.question}
                </div>
                <div
                  className={`transition-transform duration-400 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </div>
              </div>
              <div
                className={`text-sm font-light overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "h-72 pt-20 md:pl-16" : "h-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
