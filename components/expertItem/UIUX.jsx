import Image  from "next/image";
import React from "react";
import image from "../../public/image/ServiceImage/preview.png"


const UIUX = () => {
  return (
    <div className="">
        <p className="px-[20px] text-[50px] text-slate-400 font-bold mb-3">UI/UX Design</p>
          <p className="px-[20px] lg:text-2xl text-grayishOlive">
          A well-crafted user interface (UI) ensures that the design is visually appealing, intuitive, and easy to navigate, while user experience (UX) focuses on providing a seamless and satisfying journey for the user. A thoughtful UI/UX design can differentiate a brand in a crowded market, making interactions more enjoyable and reducing the friction that often leads to user frustration.
          </p>
          <Image src={image}
                height={350}
                width={350}
                className="h-[350px] px-[20px] mt-5 object-contain"/>
    </div>
  );
};

export default UIUX;
