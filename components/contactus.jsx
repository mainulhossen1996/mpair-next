'use client'
import { AutocompleteItem} from "@nextui-org/autocomplete";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Autocomplete,  AutocompleteSection } from "@nextui-org/autocomplete";
import {Button} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {

  const areas = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Chittagong", value: "chittagong" },
    { label: "Sylhet", value: "sylhet" },
    { label: "Rajshahi", value: "rajshahi" },
    { label: "Khulna", value: "khulna" },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
        <div className="relative max-w-screen-xl mx-auto ">
    <p className="text-[#008CFF] text-[62px] font-bold ml-[90px] pt-[30px]">Contact Us.</p>
    <p className="text-[#909090] text-[42px] font-semibold ml-[90px]">Reach out today and discover how we can transform your<br/> digital landscape.</p>
    <div className="w-[993px] h-[422px] bg-[#F8F8F8] mx-auto my-[80px] border-[1px] border-solid border-[#DBDBDB]">
      <div className="flex justify-around item-center">
        <div>
        <p className="text-[18px] font-bold mt-[50px] text-[#2A2A2A] flex items-center"><FaPhoneAlt className="mr-2" />Phone</p>
             <p className="text-[12px] my-[10px] text-[#6E6868]">Available: 10:00 AM (GMT+6) - 07:00 PM (GMT+6)</p>
             <p className="text-[14px] my-[10px] text-[#6E6868]">General Inquiries: <span className="text-[#2A2A2A] font-semibold">+88 01713368297</span></p>
             <p className="text-[14px] my-[10px] text-[#6E6868]">Technical Support: <span className="text-[#2A2A2A] font-semibold">+88 01713368296</span></p>
             <p className="text-[14px] my-[10px] text-[#6E6868]">Sales: <span className="text-[#2A2A2A] font-semibold">+88 01748200588</span></p>

             <p className="text-[18px] font-bold mt-[50px] text-[#2A2A2A] flex items-center"><MdEmail className="mr-2" />Email</p>
             <p className="text-[14px] my-[10px] text-[#6E6868]">General Inquiries: <span className="text-[#2A2A2A] font-semibold">info@mpairtech.com</span></p>
             <p className="text-[14px] my-[10px] text-[#6E6868]">Sales: <span className="text-[#2A2A2A] font-semibold">sales@mpairtech.com</span></p>
        </div>
        <div className="h-[422px] border-l border-[#DBDBDB]"></div>
        <div>
         <p className="text-[18px] font-bold mt-[50px]">Speak with sales through email!</p>
         <p className="text-[14px] my-[10px]">Select your service area - you will be promped to provide contact details<br/> and a message, then a sales representative will contact you.</p>
        
         <div >
         <Autocomplete 
         allowsCustomValue
         label="Select your service area" 
         variant="bordered"
         className="w-[492px] h-[42px] my-[5px]" 
     
      defaultItems={areas}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
        <Input type="email" label="Your business mail" className="w-[492px] h-[42px] my-[5px] rounded-none" variant="bordered"/>
    <Textarea
      placeholder="Describe your requirements here"
      className="w-[492px] my-[5px]"
      variant="bordered"
    />
    <Button className="bg-[#2A2A2A] w-[492px] h-[42px] text-white my-[5px] rounded-none">
     Send Queries
    </Button>
    </div>
    


        </div>
      </div>
    </div>


    <p className="text-[38px] font-bold mt-[50px] w-[993px] mx-auto">How Can We Help You?</p>
    <div className="w-[993px] h-[422px] bg-[#F8F8F8] mx-auto my-[80px] border-[1px] border-solid border-[#DBDBDB] p-[20px] text-[#5B6063]">
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="I need to know more about your services">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="I need to know more about your services">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="I need to know more about your services">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="I need to know more about your services">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="I need to know more about your services">
        {defaultContent}
      </AccordionItem>
      
    </Accordion>
    </div>

    </div>
    </div>
    </>
)
}
export default Contactus;



