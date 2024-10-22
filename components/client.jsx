'use client'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from "next/image";

const Client = () => {


return(
    <>
  <div
        className="relative bg-cover bg-center bg-repeat"
        style={{
          backgroundImage: "url('/image/bg.png')",  
          width: "100%", 
        }}
      >
        <div className="absolute inset-0 bg-white opacity-95"></div>
   <div className="relative max-w-screen-xl mx-auto">
    <p className="text-[#4F4F4F] text-[62px] font-bold text-center pt-[30px]">Powering up <span className="text-[#008CFF]">20+ Brands .</span></p>
    <p className="text-center text-[20px] mt-[15px] text-black">We dive into your unique needs with the enthusiasm of a kid in a candy store, crafting web development and business<br/> automation solutions that make your business sing.</p>
    </div>

   <div className="relative max-w-screen-xl mx-auto grid grid-cols-4 my-[70px] gap-[15px] ">
   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/ahis.png"
      width={241}
      className="my-[20px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>
   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/aromo.png"
      width={100}
      className="my-[20px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>
   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/epic.png"
      width={120}
      className="my-[20px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>
   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/ahis.png"
      width={241}
      className="my-[30px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>

   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/ahis.png"
      width={241}
      className="my-[30px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>

   <Card className="w-[320px] h-[344px] rounded-none hover:shadow-lg transition-shadow duration-300 items-center">
   <CardHeader>
    <Image
      alt="nextui logo"
      height={52}
      src="/image/clients/ahis.png"
      width={241}
      className="my-[30px] mx-auto"
    />
   </CardHeader>
   <CardBody>
    <p className="text-[#2A2A2A] font-bold my-[10px] text-[16px]">Al-Hidaayah International School</p>
    <p className="text-[#737373] my-[10px] text-[14px]">Complete School Management Software<br/> combined with School ERP & Learning<br/> Management System.</p>
    <p className="text-[#686868] font-bold my-[10px] text-[14px]">Technology: React.js, Node.js, React Native</p>
   </CardBody>
   </Card>

   </div>
   </div>
    </>
)
}
export default Client;