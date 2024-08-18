import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const MobileApp = () => {
  return (
    <div className="">
      
          <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">Mobile Application</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          Mobile applications are increasingly becoming the go-to choice for businesses and service providers. When potential customers need a product or service, they're more likely to reach for their smartphones than to use a laptop. This trend highlights the growing importance of mobile apps in capturing consumer attention and driving engagement.</p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default MobileApp;