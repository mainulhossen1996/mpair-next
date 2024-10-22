'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Abouts = () => {
  return (
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
      <p className="text-[#4F4F4F] text-[62px] font-bold text-center pt-[30px]">Creating Ideas For <span className="text-[#008CFF]">Innovation.</span></p>
      <button className="w-[213px] h-[39px] bg-[#4F4F4F] text-white rounded-[50px] mx-auto my-[40px] flex justify-center items-center gap-[10px]">Company Profile <FaArrowRightLong /></button>
      
      <div className="flex justify-center items-center gap-[5px]">
        <div className="w-[364px] h-[301px] border-[1px] border-[#E4E4E4] bg-white">
          <div className="w-[320px] mx-[30px] my-[50px]">
          <Image
                className="w-[50px] h-[50px]"
                src="/image/vector2.png"
                alt="vector"
                width={50}
                height={50}
              />
              <p className="text-start text-[#9A9A9A] text-[20px] mt-[40px]">Solutions through <span className="text-[#4F4F4F] font-bold">creative and groundbreaking </span>ingenuity.</p>
          </div>
        </div>
        <div className="w-[364px] h-[301px] border-[1px] border-[#E4E4E4] bg-white">
        <div className="w-[320px] mx-[30px] my-[50px]">
        <Image
                className="w-[50px] h-[50px]"
                src="/image/vector3.png"
                alt="vector"
                width={50}
                height={50}
              />
              <p className="text-start text-[#9A9A9A] text-[20px] mt-[40px]">Visionary concepts driving <span className="text-[#4F4F4F] font-bold">exceptional growth.</span></p>
       </div>
        </div> 
        <div className="w-[364px] h-[301px] border-[1px] border-[#E4E4E4] bg-white">
        <div className="w-[320px] mx-[30px] my-[50px]">
        <Image
                className="w-[50px] h-[50px]"
                src="/image/vector1.png"
                alt="vector"
                width={50}
                height={50}
              />
              <p className="text-start text-[#9A9A9A] text-[20px] mt-[40px]">Unleashing transformation in <span className="text-[#4F4F4F] font-bold">digital journey.</span></p>
        </div>
        </div>  
      </div>


     <div className="flex justify-center items-center">
     <div className="w-[900px] h-[494px] bg-[#D9ECFB] rounded-[40px] my-[50px] flex justify-between items-center">
      <div className="ml-[20px]">
      <Image
                className="w-[91px] h-[100px]"
                src="/image/semicolon.png"
                alt="colon"
                width={300}
                height={300}
              />
      <p className="text-[#008CFF] font-bold text-[38px]">Team collaboration<br/>
      <span className="text-[#4F4F4F] text-[25px]">The synergistic effort of<br/> individuals pooling their<br/> expertise.</span></p>
      </div>

      <div className="rounded-[40px]">
      <Image
                className="w-[454px] h-[494px] rounded-[40px] "
                src="/image/about1.png"
                alt="about1"
                width={454}
                height={494}
              />
      </div>
      </div>
     
     </div>
     

     <div className="my-[40px]">
       <p className="text-center text-[#4F4F4F] font-semibold text-[56px]">mPair Officials</p>
       <p className="text-center text-[16px]">Our dedicated team of professionals delivers outstanding service and support, guaranteeing client satisfaction and success.</p>
    
      <div className="relative bg-white w-[1000px] mx-auto grid grid-cols-3 my-[50px]">
       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div>

       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div> 
       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div>  
       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div>
       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div> 
       <div className="w-[335px] h-[250px] border-[1px] border-[#E4E4E4] flex items-center justify-center">
          <div className="text-center">
            <Image
            className="w-[90px] h-[90px] rounded-full mx-auto"
            src="/image/about1.png"
            alt="about1"
            width={90}
            height={90}
            />
           <p className="text-[#4F4F4F] text-[16px] font-bold mt-[20px]">Syed Mainul Islam</p>
           <p className="text-[#505050] text-[12px]">Chairman & CEO</p>
          </div>
       </div>
      </div>
     </div>



     <div className="relative w-[1105px] mx-auto bg-white h-[310px] border-[1px] border-[#E4E4E4] flex justify-around items-center mt-[50px]">
      <div>
        <p className="text-[38px] text-[#008CFF] my-[25px] font-bold">Find us at.</p>
        <p className="text-[18px] text-[#717171]">M.B. Complex<br/>90 High Level Road,<br/>Chattogram, Bangladesh</p>
        <Link href="/contact"><button className="text-white bg-[#4F4F4F] rounded-[6px] w-[214px] h-[42px] mt-[20px]">Contact Us</button></Link>
      </div>
      <div>
      <Image
            className="w-[486px] h-[284px]"
            src="/image/map.png"
            alt="map"
            width={486}
            height={284}
            />
      </div>
     </div>

     </div>
      </div>
    </>
  );
}

export default Abouts;