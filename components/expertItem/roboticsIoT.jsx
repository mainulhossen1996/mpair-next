import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const Robotics = () => {
  return (
    <div className="">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">Robotics & IoT</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          By integrating smart robots with IoT devices, industries can automate complex processes, monitor operations in real-time, and make data-driven decisions that enhance performance.</p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default Robotics;
