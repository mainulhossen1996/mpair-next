import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const CloudSoftware = () => {
  return (
    <div className="">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">Cloud Software</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          Cloud software offers flexible access to data and applications from anywhere, streamlining operations, enhancing collaboration, and enabling effortless scalability.
          </p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default CloudSoftware;