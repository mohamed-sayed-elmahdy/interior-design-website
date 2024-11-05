import React from "react";
import image1 from '../../assets/projects/sodic-allegria-villa/11.webp'
import image2 from '../../assets/projects/sodic-allegria-villa/22.webp'
import image3 from '../../assets/projects/sodic-allegria-villa/33.webp'
import image4 from '../../assets/projects/sodic-allegria-villa/44.webp'
import Image from "next/image";

function page() {
  return (
      <div className="flex flex-col p-3 lg:p-8 justify-center max-w-[1356px]">
        <div className="flex flex-col md:flex-row justify-center gap-2 w-full items-center ">
            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 1.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
                  
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
   
            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 2.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>

            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 3.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full items-center mt-2">
            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 4-1.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-,300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
   
            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 5.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>

            <div
              className="relative group w-full h-full"
            >
              <Image
                src='/kATTAMYA/MRS HAYAM ONE KATTAMYA SHOT 6.webp'
                className="w-full h-full object-cover"
                alt="Image"
                width={1500}
                height={1500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-sm flex gap-5 absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
               <p> New Cairo  </p>
                  <p>2020  </p>
                  <p>1250m2</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-3xl font-semibold"></h1>
              </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 w-full items-center mt-2">
        </div>
      </div>
  );
}

export default page;
