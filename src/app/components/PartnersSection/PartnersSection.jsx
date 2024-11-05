import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
function PartnersSection() {
  return (
    <div>
      <h1 className="text-black text-5xl md:text-8xl my-12 font-normal text-center font-[relaway]">
        Partners
      </h1>
      <Marquee className="mb-36 mt-20" gradient={true} pauseOnHover={true} gradientWidth={60}>
        <div className="flex gap-16 justify-center items-center">
          <Image
            className="w-72 h-36"
            src="/clintslogo/0.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-72 h-20"
            src="/clintslogo/1.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-72 h-16"
            src="/clintslogo/EMAAR.png"
            alt="logo"
            width={180}
            height={120}
            priority
            quality={100}
          />
          <Image
            className="w-36 h-52"
            src="/clintslogo/2.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-72 h-36"
            src="/clintslogo/3.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-72 h-20  "
            src="/clintslogo/5.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-72 h-20  "
            src="/clintslogo/sodic.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-64 h-44  "
            src="/clintslogo/logo.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-64 h-36  "
            src="/clintslogo/uptown.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-60 h-48  "
            src="/clintslogo/unnamed.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-60 h-44  "
            src="/clintslogo/mountain-view.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-56 h-40 "
            src="/clintslogo/palm-hills.png"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
          <Image
            className="w-56 h-40 ml-4  mr-16"
            src="/clintslogo/Madinaty_Logo.jpg"
            alt="logo"
            width={3180}
            height={3120}
            priority
            quality={100}
          />
        </div>
      </Marquee>
    </div>
  );
}

export default PartnersSection;
