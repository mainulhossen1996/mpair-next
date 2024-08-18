import Image from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const SEO = () => {
  return (
    <div className="h-[70vh]">
      
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">SEO & Marketing</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
            Interior design in modern homes emphasizes clean lines, minimalism,
            and functional spaces. Neutral colors with bold accents, natural
            materials like wood and stone, and ample natural light are key.{" "}
          </p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default SEO;
