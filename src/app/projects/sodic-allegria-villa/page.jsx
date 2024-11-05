import React from "react";
import image1 from '../../assets/projects/sodic-allegria-villa/11.webp'
import image2 from '../../assets/projects/sodic-allegria-villa/22.webp'
import image3 from '../../assets/projects/sodic-allegria-villa/33.webp'
import image4 from '../../assets/projects/sodic-allegria-villa/44.webp'
import Image from "next/image";

function page() {
  return (
      <div className="flex flex-col p-3 lg:p-8 justify-center max-w-[1356px]">
        <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image1}
                className="w-full h-full object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>West Cairo</p>
                <p>2022</p>
                <p>1600m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
   
            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image3}
                className="w-full h-[472.5px] object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>West Cairo</p>
                <p>2022</p>
                <p>1600m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>

            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image2}
                className="w-full h-[472.5px] object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>West Cairo</p>
                <p>2022</p>
                <p>1600m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
        </div>

        <div className="my-3">
            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image4}
                className="w-full h-[500px] object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>West Cairo</p>
                <p>2022</p>
                <p>1600m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
        </div>
      </div>
  );
}

export default page;
