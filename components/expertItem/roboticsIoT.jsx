import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const Robotics = () => {
  return (
    <div className="">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">Robotics & IoT</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          Robotics and the Internet of Things (IoT) are revolutionizing industrial automation, driving efficiency, precision, and productivity to new heights. By integrating smart robots with IoT devices, industries can automate complex processes, monitor operations in real-time, and make data-driven decisions that enhance performance. These technologies reduce manual labor, minimize errors, and increase safety in hazardous environments.</p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default Robotics;
