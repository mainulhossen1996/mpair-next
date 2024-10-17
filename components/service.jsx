'use client'
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Service = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button); 
  };

  return (
    <>
      <div className="w-[1200px] mx-auto flex flex-col items-start">
        <p className="text-[#4F4F4F] text-[52px] font-bold my-[20px]">Cloud & Software</p>
        <p className="text-[#008CFF] text-[35px] font-bold mb-[20px]">Making Digital Revolution</p>
        <p className="w-[900px] text-[#818181] mb-[40px]">
          Utilizing the latest web technologies, Team mPair will provide you with the best and innovative Cloud & Software solutions. Businesses can be more flexible by using their resources from any location because of cloud application development services.
        </p>

        <div className="flex justify-between items-start w-full gap-[20px]">
          <div className="flex flex-col gap-2">

            <div className="flex items-center">
              {activeButton === "website" && <IoIosArrowForward className="text-[#008CFF] mr-1" />}
              <button
                className="font-bold text-[#4F4F4F] mb-[10px] text-left"
                onClick={() => handleButtonClick("website")}
              >
                Website Design & Development
              </button>
            </div>

            <div className="flex items-center">
              {activeButton === "desktop" && <IoIosArrowForward className="text-[#008CFF] mr-1" />}
              <button
                className="font-bold text-[#4F4F4F] mb-[10px] text-left"
                onClick={() => handleButtonClick("desktop")}
              >
                Desktop Application Development
              </button>
            </div>

            <div className="flex items-center">
              {activeButton === "mobile" && <IoIosArrowForward className="text-[#008CFF] mr-1" />}
              <button
                className="font-bold text-[#4F4F4F] mb-[10px] text-left"
                onClick={() => handleButtonClick("mobile")}
              >
                Mobile Application Development
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[20px]">
       
            <div className="relative w-[200px] h-[300px]">
              <Image
                className="h-[150px]"
                src="/image/service1.png"
                alt="service1"
                width={300}
                height={300}
              />
            </div>
        
            <div className="relative w-[200px] h-[300px] -mt-[50px]">
              <Image
                className="h-[150px]"
                src="/image/service2.png"
                alt="service2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

     
       
      </div>
      <div className="bg-[#EDF5FA] w-full h-[315px] mt-[60px]">
          <div className="py-[20px]">
            <p className="text-center text-[#4F4F4F] text-[32px] font-semibold">Upscaling Business Through</p>
            <div className="flex justify-around items-center my-[40px]">
              <div className="flex flex-col items-center w-[174px]">
                <p className="text-[#008CFF] text-[36px] font-bold">32%</p>
                <p className="text-[#909090] text-[16px] text-center">Improved Customer Engagement</p>
              </div>
              <div className="flex flex-col items-center w-[174px]">
                <p className="text-[#008CFF] text-[36px] font-bold">25%</p>
                <p className="text-[#909090] text-[16px] text-center">Increased Accessibility and Convenience</p>
              </div>
              <div className="flex flex-col items-center w-[174px]">
                <p className="text-[#008CFF] text-[36px] font-bold">31%</p>
                <p className="text-[#909090] text-[16px] text-center">Data Collection and Analytics</p>
              </div>
              <div className="flex flex-col items-center w-[174px]">
                <p className="text-[#008CFF] text-[36px] font-bold">22%</p>
                <p className="text-[#909090] text-[16px] text-center">Brand Visibility and Reach</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Service;
