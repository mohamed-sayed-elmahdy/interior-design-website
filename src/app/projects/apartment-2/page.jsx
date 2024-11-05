import React from "react";
import Image from "next/image";
import image1 from "../../assets/projects/apartment-2/1.webp";
import image2 from "../../assets/projects/apartment-2/2.webp";
import image3 from "../../assets/projects/apartment-2/3.webp";
import image4 from "../../assets/projects/apartment-2/main.webp";


const Page = () => {
  return (
    <div className="flex flex-col p-3 lg:p-8 justify-center max-w-[1356px]">
      <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
        <div className="relative group w-full h-full">
          <Image
            src={image1}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>150m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image
            src={image2}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>150m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image src={image3} className="w-full h-full object-cover" alt="Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>150m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 my-3 w-full">
        <div className="relative group w-full h-full">
          <Image
            src={image4}
            className="w-full h-[500px] object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>150m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
