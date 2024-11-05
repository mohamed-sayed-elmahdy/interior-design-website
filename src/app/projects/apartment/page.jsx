import React from "react";
import Image from "next/image";
import small1 from "../../assets/projects/apartment/1.webp";
import small from "../../assets/projects/apartment/2.webp";
import big from "../../assets/projects/apartment/3.webp";
import small3 from "../../assets/projects/apartment/4.webp";
import image5 from "../../assets/projects/apartment/5.webp";
import image6 from "../../assets/projects/apartment/6.webp";
import image7 from "../../assets/projects/apartment/7.webp";
import image8 from "../../assets/projects/apartment/8.webp";
import image9 from "../../assets/projects/apartment/9.webp";
import image10 from "../../assets/projects/apartment/10.webp";
import image11 from "../../assets/projects/apartment/11.webp";

const Page = () => {
  return (
    <div className="flex flex-col p-3 lg:p-8 justify-center max-w-[1356px]">
      <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
        <div className="relative group w-full h-full">
          <Image
            src={small1}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>200m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image
            src={small}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>200m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image src={big} className="w-full h-full object-cover" alt="Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>200m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 my-3 w-full">
        <div className="relative group w-full h-full">
          <Image
            src={small3}
            className="w-full h-[500px] object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2023</p>
            <p>200m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
        <div className="relative group w-full h-full">
          <Image
            src={image5}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2022</p>
            <p>500m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image
            src={image6}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2022</p>
            <p>500m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300"></div>
        </div>

        <div className="relative group w-full h-full">
          <Image
            src={image7}
            className="w-full h-full object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2022</p>
            <p>500m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 w-full my-3">
        <div className="relative group w-full h-full">
          <Image
            src={image8}
            className="w-full h-[500px] object-cover"
            alt="Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p>New Cairo</p>
            <p>2022</p>
            <p>500m2</p>
          </div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 w-full">
            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image9}
                className="w-full h-full object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>New Cairo</p>
                <p>2022</p>
                <p>500m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              
              </div>
            </div>

            <div
              className="relative group w-full h-full"
            >
              <Image
                src={image10}
                className="w-full h-full object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>New Cairo</p>
                <p>2022</p>
                <p>500m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
        
              </div>
            </div>

            {/* <div
              className="relative group w-full h-full"
            >
              <Image
                src={image11}
                className="w-full h-full object-cover"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p>New Cairo</p>
                <p>2022</p>
                <p>500m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
       
              </div>
            </div> */}
        </div>
    </div>
  );
};

export default Page;
