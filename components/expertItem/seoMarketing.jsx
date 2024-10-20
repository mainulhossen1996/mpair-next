import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const SEO = () => {
  return (
    <div className="">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">SEO & Marketing</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          Unlock rapid business growth with targeted SEO and strategic marketing. Enhance your online presence, drive high-quality traffic, increase brand visibility, and convert leads into loyal customers.
          </p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default SEO;
