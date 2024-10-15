import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'; // Assuming you're using Next.js

const Industry = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const tabControls = useAnimation();

  const tabs = [
    { id: 1, label: "Education", icon: "/image/student-alt.svg", content: "ERP solutions for educational institutions" },
    { id: 2, label: "Health Care", icon: "/image/lungs.svg", content: "Doctor appointment scheduling and telemedicine services" },
    { id: 3, label: "E-Commerce", icon: "/image/marketplace-alt.svg", content: "Online and offline store management with integrated POS" },
    { id: 4, label: "Infrastructure", icon: "/image/house-building.svg", content: "Project management with precise accounting tools" },
    { id: 5, label: "Sports & Fitness", icon: "/image/court-sport.svg", content: "ERP solutions for educational institutions" },
    { id: 6, label: "Govt. & Public", icon: "/image/government-flag.svg", content: "Doctor appointment scheduling and telemedicine services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    const minScrollY = 50;
    const maxScrollY = 300; // Adjust as needed

    const progress = (scrollY - minScrollY) / (maxScrollY - minScrollY);

    const clampedProgress = Math.min(Math.max(progress, 0), 1);

    const fontSize = 7 + (3 - 7) * clampedProgress; // Interpolate between start and end values

    controls.start({
      fontSize: `${fontSize}rem`,
      transition: { duration: 1 }, // Adjust duration as needed
    });
  }, [scrollY, controls]);

  useEffect(() => {
    if (scrollY > 250) {
      tabs.forEach((tab, index) => {
        tabControls.start(i => ({
          opacity: 1,
          y: 0, // Slide in from bottom
          transition: { duration: 0.4, delay: i * 0.1 },
        }));
      });
    } else {
      tabControls.start({ opacity: 0, y: '100%', transition: { duration: 0.1 } });
    }
  }, [scrollY, tabControls, tabs]);

  return (
    <div className="max-w-screen-xl mx-auto justify-center">
      <motion.p
        className="text-center mb-6 font-medium mt-6"
        animate={controls}
        initial={{ fontSize: '7rem' }}
      >
        Industry Excellence 
      </motion.p>
      <div className="flex items-center justify-center gap-3">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            custom={index}
            className="w-2/12"
            initial={{ opacity: 0, y: '-100%' }}
            animate={tabControls}
          >
            <div className="text-start p-[20px] bg-[#f4f4f4] h-[210px] text-[14px] tab-shadow lg:text-[18px] duration-200 font-[550] w-full">
              <Image
                className="h-[16px] lg:h-[26px] w-[16px] lg:w-[26px] my-3 object-contain active-svg"
                width={25}
                height={25}
                alt={tab.label}
                src={tab.icon}
              />
              <p className="font-medium text-2xl">{tab.label}</p>
              <p className='text-[12px] font-normal mt-10 border-t pt-3'>{tab.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
