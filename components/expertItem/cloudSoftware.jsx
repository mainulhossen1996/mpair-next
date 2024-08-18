import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const CloudSoftware = () => {
  return (
    <div className="">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">Cloud Software</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          In today's fast-paced business environment, cloud software has become essential for companies aiming to stay competitive and agile. With the flexibility to access data and applications from anywhere, businesses can streamline operations, enhance collaboration, and scale effortlessly. Cloud solutions not only reduce IT costs but also ensure data security and reliability, allowing teams to focus on innovation and growth. 
          </p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default CloudSoftware;