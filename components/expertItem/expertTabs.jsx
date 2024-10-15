"use client";
import React, { useState, useRef, useEffect } from "react";
import CloudSoftware from './cloudSoftware';
import MobileApp from './mobileApp';
import Robotics from './roboticsIoT';
import SEO from './seoMarketing';
import UIUX from "./UIUX";


const tabs = [
  { name: "UI/UX Design", component: <UIUX/> },
  { name: "Cloud Software", component: <CloudSoftware /> },
  { name: "Mobile Application", component: <MobileApp /> },
  { name: "Robotics & Iot", component: <Robotics /> },
  { name: "SEO & Marketing", component: <SEO /> },
];

export const ExpertTabs = () => {
const [activeTab, setActiveTab] = useState(tabs[0].name);
const [mobileComponent, setMobileComponent] = useState(tabs[0].component);
const refs = useRef([]);
const contentWrapperRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabName = entry.target.getAttribute("data-tab-name");
          setActiveTab(tabName);
        }
      });
    },
    { threshold: 0.5 }
  );

  refs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    if (refs.current) {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    }
  };
}, [refs]);

const handleTabClick = (name, index) => {
  setActiveTab(name);
  setMobileComponent(tabs[index].component);
  if (refs.current[index] && window.innerWidth >= 1024) {
    refs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <div className="max-w-screen-xl mx-auto expert-section lg:flex">
      <div className="border-r lg:sticky lg:top-0 lg:w-1/3 font-semibold pb-36">
        

        {/* Mobile and Tablet Tabs */}
        <div className="lg:hidden scrollbar-hidden overflow-x-auto whitespace-nowrap scrollbar-hide ">
          
          <ul className="list-none flex">
            {tabs.map((tab, index) => (
              <li
                key={tab.name}
                className={`cursor-pointer py-2 mr-4 inline-block px-2 ${activeTab === tab.name
                  ? "border-b-2 border-grayishOlive font-bold"
                  : ""
                  }`}
                onClick={() => handleTabClick(tab.name, index)}
              >
                <span className="flex gap-[22px]">{tab.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-24 overflow-y-auto">
        <div className="lg:my-10 relative">
        <h1 className='text-start text-[90px] font-semibold'>We Are<br/>Expert In</h1>
          <hr className="hidden lg:block" />
        </div>
          <ul className="list-none p-0 hidden lg:block ">
            {tabs.map((tab, index) => (
              <li
                key={tab.name}
                className={`cursor-pointer text-3xl py-4 px-4 ${activeTab === tab.name ? "text-[#0077ff]" : ""
                  }`}
                onClick={() => handleTabClick(tab.name, index)}
              >
                <span className="lg:flex gap-[22px]">
                  <span>
                    {activeTab === tab.name ? (
                      <svg
                        className="mt-3"
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.375 18.3697V0.630341L14.3047 9.50001L0.375 18.3697Z"
                          fill="#0077ff"
                        />
                      </svg>
                    ) : null}
                  </span>
                  {tab.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* content section */}
      <div
        ref={contentWrapperRef}
        className="lg:w-2/3 pb-36 lg:pt-36 scrollbar-hidden overflow-y-auto"
      >
        {/* Mobile and Tablet Content */}
        <div className="lg:hidden">{mobileComponent}</div>
        {/* Desktop Content */}
        <div className="hidden lg:block">
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              ref={(el) => (refs.current[index] = el)}
              data-tab-name={tab.name}
              className="lg:px-[72px] lg:pt-[100px]"
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertTabs;
