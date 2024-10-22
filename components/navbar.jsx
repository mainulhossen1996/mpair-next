'use client'
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const serviceDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("navBar");
      if (window.scrollY > 22) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    };

    const handleClickOutside = (event) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
        setServiceDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-50 lg:mx-0 ${isServiceDropdownOpen || isProductsDropdownOpen ? 'backdrop-blur-md' : ''}`} id="navBar">
        <div className="max-w-screen-xl mx-auto py-5 flex justify-between items-center relative">
          {/* Logo and Links container */}
          <div className="flex items-center gap-5 md:gap-16">
            <Link href="/home">
              <Image
                className="h-[30px] w-auto object-contain"
                src="/image/mPair.png"
                alt="mPair Logo"
                width={300}
                height={300}
              />
            </Link>

            {/* Responsive navigation links */}
            <div className="hidden md:flex gap-10 ">
              <div
                ref={serviceDropdownRef}
                onMouseEnter={() => setServiceDropdownOpen(true)}
                className={`relative`}
              >
                <div className={`font-medium hover:text-[#008CFF] cursor-pointer text-lg ${pathname === "/servicess" ? "text-[#008CFF]" : "text-gray-600"}`}>
                  Service
                </div>
                
                {isServiceDropdownOpen && (
                   <div className="absolute left-0 top-16 mt-2 w-[1000px] bg-white shadow-lg rounded-lg flex justify-around items-center">
                   <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
                   <Image
                className="h-[137px]"
                src="/image/service1.png"
                alt="service1"
                width={184}
                height={137}
              />
               <Image
                className="h-[102px] mt-[-80px] ml-[80px]"
                src="/image/service2.png"
                alt="service2"
                width={140}
                height={102}
              />
             <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
             </Link>
             <div className="h-[263px] border-l border-[#DBDBDB]"></div>

             <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
             <Image
                className="h-[137px]"
                src="/image/service1.png"
                alt="service1"
                width={184}
                height={137}
              />
               <Image
                className="h-[102px] mt-[-80px] ml-[80px]"
                src="/image/service2.png"
                alt="service2"
                width={140}
                height={102}
              />
             <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
             </Link>
             
             <div className="h-[263px] border-l border-[#DBDBDB]"></div>
             <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
             <Image
                className="h-[137px]"
                src="/image/service1.png"
                alt="service1"
                width={184}
                height={137}
              />
               <Image
                className="h-[102px] mt-[-80px] ml-[80px]"
                src="/image/service2.png"
                alt="service2"
                width={140}
                height={102}
              />
             <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
             </Link>
                 </div>
                )}
              </div>

              <div
                ref={productsDropdownRef}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className={`relative`}
              >
                {/* <Link href="/features" className={`font-medium hover:text-[#008CFF] cursor-pointer  text-lg ${pathname === "/features" ? "text-[#008CFF]" : "text-gray-600"}`}>
                  Products
                </Link> */}
                <div className={`font-medium hover:text-[#008CFF] cursor-pointer  text-lg ${pathname === "/features" ? "text-[#008CFF]" : "text-gray-600"}`}>
                  Products
                </div>
                
                {isProductsDropdownOpen && (
                  // <div className="absolute left-0 top-16 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  //   <Link href="/product1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 1</Link>
                  //   <Link href="/product2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 2</Link>
                  //   <Link href="/product3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 3</Link>
                  // </div>
                  <div className="absolute left-0 top-16 mt-2 w-[1000px] bg-white shadow-lg rounded-lg flex justify-around items-center">
                    <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
                <Image
                className="w-[100px] my-[20px]"
                src="/image/p1icon.png"
                alt="vector"
                width={100}
                height={100}
              />
               <Image
                className="w-[140px] my-[20px]"
                src="/image/project1.png"
                alt="vector"
                width={140}
                height={100}
              />
              <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
              </Link>
              <div className="h-[263px] border-l border-[#DBDBDB]"></div>

              <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
                <Image
                className="w-[100px] my-[20px]"
                src="/image/p1icon.png"
                alt="vector"
                width={100}
                height={100}
              />
              <Image
                className="w-[140px] my-[20px]"
                src="/image/project1.png"
                alt="vector"
                width={140}
                height={100}
              />
              <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
              </Link>
              
              <div className="h-[263px] border-l border-[#DBDBDB]"></div>
              <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 
                <Image
                className="w-[100px] my-[20px]"
                src="/image/p1icon.png"
                alt="vector"
                width={100}
                height={100}
              />
               <Image
                className="w-[140px] my-[20px]"
                src="/image/project1.png"
                alt="vector"
                width={140}
                height={100}
              />
              <p className="w-[201px] text-[14px] text-[#9A9A9A]">From Planning to Profit: Experience Business Growth Through Our Integrated Approach.</p>
              </Link>
                  </div>
                )}
              </div>

              <Link href="/clients" className={`font-medium hover:text-[#008CFF] text-lg ${pathname === "/clients" ? "text-[#008CFF]" : "text-gray-600"}`}>Clients</Link>
              <Link href="/about-us" className={`font-medium hover:text-[#008CFF] text-lg ${pathname === "/about-us" ? "text-[#008CFF]" : "text-gray-600"}`}>About Us</Link>
              <Link href="/career" className={`font-medium hover:text-[#008CFF] text-lg ${pathname === "/career" ? "text-[#008CFF]" : "text-gray-600"}`}>Career</Link>
            </div>
          </div>

          {/* Right side buttons and links */}
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/contact" className={`font-medium flex items-center ${pathname === "/contact" ? "text-[#ffffff]" : "text-white"}`}>
              <Button className="bg-[#008CFF] hover:bg-[#0077ff] px-6 py-2 text-white rounded-none">
                <Mail size={20} /><p className="ml-2">Contact Us</p>
              </Button>
            </Link>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Floating */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center p-5 z-50">
            <button onClick={toggleMenu} className="self-end p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/home"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Home</p></Link>
            <Link href="/features"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Features</p></Link>
            <Link href="/price"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Pricing</p></Link>
            <Link href="/shop"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Shop</p></Link>
            <Link href="/sales"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Talk to Sales</p></Link>
            <Button className="mt-2 w-full h-[35px] rounded-full bg-[#008CFF] hover:bg-[#00a5a8] text-white text-sm font-semibold leading-[14px]">Sign In</Button>
          </div>
        )}
      </div>
    </>
  );
};
