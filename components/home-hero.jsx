"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Education from "@/components/education";
import HealthCare from "@/components/healthcare";
import Ecommerce from "@/components/ecommerce";
import Infrustructure from "@/components/infrustructure";
import Industry from "@/components/industry";

export const HomeHero = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { id: 1, label: "Education", icon: "image/student-alt.svg", content: "ERP solutions for educational institutions" },
    { id: 2, label: "Health Care", icon: "image/lungs.svg", content: "Doctor appointment scheduling and telemedicine services" },
    { id: 3, label: "E-Commerce", icon: "image/marketplace-alt.svg", content: "Online and offline store management with integrated POS" },
    { id: 4, label: "Infrustructure", icon: "image/house-building.svg", content: "Project management with precise accounting tools" },
    { id: 5, label: "Sports & Fitness", icon: "image/court-sport.svg", content: "ERP solutions for educational institutions" },
    { id: 6, label: "Govt. & Public", icon: "image/government-flag.svg", content: "Doctor appointment scheduling and telemedicine services" },
    ,
  ];

  return (
    <div className="hero-bg">
      <section className=" pt-10 lg:pt-0" id="Hero">
        <div className="w-full mx-auto flex justify-center">
          <div className="items-center text-center lg:mt-10 mt-4 lg:py-16 py-0">
            <p className="header-text mb-2">
            Automate Your Business with  <br/> One-stop<span className="text-[#008CFF]"> B2B Solutions</span>
            </p>
            <p className="text-2xl font-regular text-[#565656] leading-snug mb-5">
            Experience rapid business growth with mPair Technologies through our<br/> integrated approach and expert solutions.
              
            </p>

            <Button className="bg-[#008CFF] hover:bg-[#0077ff] text-white font-semibold text-lg p-3 px-6 mt-5">
              Let's Talk <ArrowUpRight className="ml-3" />
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto justify-center mt-16">
        <p className="text-center mb-4 font-medium text-lg">Industry Excellence ⭐ ⭐ ⭐</p>
        <div className="">
          <div className="flex items-center gap-3">
            {tabs.map((tab, index) => (
              <div key={index} className="w-2/12">
                <div
                  className="text-center ind-box rounded-2xl p-[20px] bg-[#ffffff] h-[120px] text-[14px] tab-shadow lg:text-[18px] duration-200 font-[550] w-full"
                >
                  <Image
                    className="h-[16px] lg:h-[22px] w-[16px] lg:w-[25px] my-3 object-contain inactive-svg mx-auto"
                    width={20}
                    height={20}
                    alt={tab.label}
                    src={tab.icon}
                  />
                  <p className="font-medium ind-text">
                  {tab.label}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Industry /> */}
    </div>
  );
};