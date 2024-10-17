'use client'
import { AiOutlineTeam } from "react-icons/ai";
import { PiOfficeChairLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { BsPersonFillX } from "react-icons/bs";
import {Divider} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Careermpair = () => {


return(
    <>
    <div className='py-[50px]'>
    <p className="text-[#008CFF] text-[62px] font-bold ml-[95px] pt-[30px]">mPair Career</p>
    <p className="text-[#909090] text-[24px] font-semibold ml-[95px]">Lorem ipsum dolor sit amet consectetur. Adipiscing tellus tellus nibh<br/>nunc in libero. Adipiscing convallis praesent eros purus tellus<br/>malesuada ut quis interdum.</p>
   
   
    <div className="flex justify-around items-center my-[50px]">
        <div className="flex items-center"> <AiOutlineTeam className="mr-2 text-[#008CFF] text-[32px]" /><p className="text-[#919191]">Team Work <br/><span className="text-[#000000] font-semibold">Facilities</span></p></div>
        <div className="flex items-center"><PiOfficeChairLight className="mr-2 text-[#008CFF] text-[32px]" /><p className="text-[#919191]">Flexible  <span className="text-[#000000] font-semibold">Work<br/> Environment</span></p></div>
        <div className="flex items-center"><IoBulbOutline className="mr-2 text-[#008CFF] text-[32px]" /><p className="text-[#000000] font-semibold">Adopting  <span className="text-[#919191]">Trendy<br/> Technologies</span></p></div>
        <div className="flex items-center"><BsPersonFillX className="mr-2 text-[#008CFF] text-[32px]" /><p className="text-[#919191]">Experienced <br/><span className="text-[#000000] font-semibold">Team Lead</span></p></div>
    </div>  

    <p className="text-[#2A2A2A] text-[66px] font-bold ml-[95px] my-[80px]">Open Roles</p> 

{/* card */}
    <div className="grid grid-cols-3 gap-[10px] mx-[50px]">
    <Link href="/careerin">
    <div className="w-[462px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>



    <Link href="/careerin">
    <div className="w-[460px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>


    <Link href="/careerin">
    <div className="w-[460px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>


    <Link href="/careerin">
    <div className="w-[460px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>


    <Link href="/careerin">
    <div className="w-[460px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>


    <Link href="/careerin">
    <div className="w-[460px] h-[275px] p-[35px] bg-[#EEEEEE] group hover:bg-gradient-to-r from-[#7141D1] to-[#3F6BEC]  transition-colors duration-300">
    <p className="text-[14px] font-bold group-hover:text-white transition-colors duration-300">ENGINEER</p>
    <p className="text-[20px] font-bold mt-[70px] group-hover:text-white transition-colors duration-300">Front-End Developer</p>
    <div className="flex h-5 items-center space-x-4 text-small my-[10px] group-hover:text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[30px] flex justify-between items-center">
        <p className="text-[#7D7D7D] text-[16px] font-semibold group-hover:text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <FaArrowRightLong className="group-hover:text-white transition-colors duration-300" />
    </div>
    </div></Link>
           
        </div>
    </div>
    </>
)
}
export default Careermpair;