
import React from "react";
const testimonials = [
  {
    name: "1. Briefing",
    text: (
      <>
        Previous work.
        <br />
        Hear to customer.
        <br />
        Mood board selection.
      </>
    ),
  },
  {
    name: "2. Design",
    text: (
      <>
        Project description.
        <br />
        3D Render shot.
        <br />
        Technical Drawings.
        <br />
        Design & Vendor List.
      </>
    ),
  },
  {
    name: "3. Project Management",
    text: (
      <>
        Costs & Quotation.
        <br />
        Project Clarification.
        <br />
        Time Frame.
      </>
    ),
  },
  {
    name: "4. Build",
    text: (
      <>
        Implementation Supervision.
        <br />
        Supply & Install.
        <br />
        Products customize.
      </>
    ),
  },
  {
    name: "5. Hand Over",
    text: (
      <>
        The proposed owner's manual for buildings.
        <br />
        A manual for the construction team.
        <br />
        Every certification and warranty relating to the project.
      </>
    ),
  },
];

function TestimonialCard({ name, text, thirdCardMargin }) {
  return (
    <div className="flex flex-col items-center justify-start max-w-[260px] h-full p-8 px-4 rounded-xl bg-white text-black shadow-md shadow-black pb-4 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.99] hover:!scale-105 transition-all duration-500">
      <h3 className="capitalize text-xl font-bold">{name}</h3>
      <p className="text-sm leading-7 my-3 font-light">{text}</p>
    </div>
  );
}

function WhatTheySay() {
  return (
    <div className="my-16">
      <div className="text-center py-10">
        <h2 className="mx-auto max-w-96 mb-12 text-2xl md:text-5xl text-black">
          How we work
        </h2>
        <div className="grid max-w-max mx-auto gap-5 items-center justify-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 group">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              thirdCardMargin={index === 2 ? "mt-7" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatTheySay;
