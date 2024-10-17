'use client'
import {Divider} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

const Careerinside = () => {


return(
    <>
      <div>
      <div className="w-[949px] h-[224px] mx-auto bg-gradient-to-r from-[#7141D1] to-[#3F6BEC] p-[30px]">
        <p className="text-[14px] font-bold text-white transition-colors duration-300">ENGINEER</p>
         <p className="text-[20px] font-bold mt-[50px] text-white transition-colors duration-300">Front-End Developer</p>
     <div className="flex h-5 items-center space-x-4 text-small my-[10px] text-white transition-colors duration-300">
        <div>On site</div>
        <Divider orientation="vertical" />
        <div>Full time</div>
        <Divider orientation="vertical" />
        <div>Mid level</div>
    </div>
    <div className="my-[20px] flex justify-between items-center">
        <p className="text-[16px] font-semibold text-white transition-colors duration-300">18,000-26,000 BDT/month</p>
        <Link href=""><p className="text-white font-semibold flex item-center gap-[3px]">Apply Now <FaArrowRightLong className="text-white mr-9 mt-[3px]" /></p></Link>
    </div>
    </div>



    <div className="mx-[280px]">
 <p className="text-[20px] text-[#2A2A2A] font-bold mt-[50px]">About</p>
 <p className="text-[#5F5F5F]">At mPair, we are dedicated to building the next generation of innovative software solutions. Our team is composed of<br/>
    talented and passionate designers, and we are excited to expand our creative team with individuals who share our vision<br/>
    and enthusiasm.</p>

<p className="text-[20px] text-[#2A2A2A] font-bold mt-[20px]">Position Overview</p>
<p className="text-[#5F5F5F]">mPair is seeking an experienced Full-stack Developer to join our expanding development team. This role is pivotal in crafting<br/>
   and refining the technology that drives our innovative web applications. With a strong foundation in PHP, ReactJS, and <br/>
   MySQL, you will play a key role in developing front-end and back-end solutions that enhance user experiences. Working<br/>
   within a large, dynamic development team, you will contribute to projects that are at the heart of our business operations.If<br/>
   you are passionate about building scalable, efficient web applications and eager to collaborate with a team of skilled<br/>
   developers, we want to hear from you.</p>

<p className="text-[20px] text-[#2A2A2A] font-bold mt-[20px]">Job Responsibilities</p>
<div className="text-[16px] text-[#5F5F5F]">
    <li>Develop high-quality web applications by integrating front-end and back-end technologies using PHP, ReactJS, MySQL, HTML5, and CSS3.</li>
    <li>Participate in the entire application development lifecycle, from concept to deployment, with a focus on coding and debugging.</li>
    <li>Work collaboratively with UI/UX designers to ensure the technical feasibility of designs and create responsive, user-centric interfaces.</li>
    <li>Contribute to the optimization of applications for maximum speed and scalability.</li>
    <li>Assist in database design, development, and management in MySQL, ensuring data integrity and performance.</li>
    <li>Engage with the development team in code reviews, sharing knowledge and practices to improve code quality and team skills.</li>
    <li>Stay updated with emerging web technologies and apply them into operations and activities.</li>
    <li>Collaborate across departments to understand user needs and translate them into technical solutions.</li>
</div>

<p className="text-[20px] text-[#2A2A2A] font-bold mt-[20px]">Qualifications</p>
<div className="text-[16px] text-[#5F5F5F]">
<li>Solid experience as a Full-stack Developer with a focus on PHP, ReactJS, HTML5, CSS3, and MySQL.</li>
<li>Proficiency in developing responsive web applications and an understanding of web design principles.</li>
<li>Knowledge of database design, query optimization, and database management.</li>
<li>Experience with version control systems, preferably Git.</li>
<li>Strong problem-solving skills and the ability to work effectively in a team environment.</li>
<li>Good understanding of software development methodologies, particularly Agile.</li>
<li>A commitment to continuous learning and improvement.</li>
<li>Bachelors degree in Computer Science, Engineering, or a related field is preferred.</li>
</div>
</div>


<div className="p-[50px] w-[949px] h-[770px] bg-[#F1F1F1] border-[1px] border-solid border-[#DBDBDB] mx-auto my-[100px]">
  <p className="text-[38px] text-[#2A2A2A] font-bold">Apply Now.</p>
  <div className="mt-[50px]">
  <p className="mt-[15px] mb-[10px] font-semibold flex item-center">Full Name <IoMdStar className="text-[#FF0000] text-[7px]" /></p>
  <Input type="email" label="Enter you name" className="w-[810px] h-[50px] my-[5px] bg-white" variant="bordered"/>
  <p className="mt-[15px] mb-[10px] font-semibold flex item-center">Email <IoMdStar className="text-[#FF0000] text-[7px]" /></p>
  <Input type="email" label="Enter your email" className="w-[810px] h-[50px] my-[5px] bg-white" variant="bordered"/>
  <p className="mt-[15px] mb-[10px] font-semibold flex item-center">Phone <IoMdStar className="text-[#FF0000] text-[7px]" /></p>
  <Input type="email" label="ex. +8801 * * **" className="w-[810px] h-[50px] my-[5px] bg-white" variant="bordered"/>
  <p className="mt-[15px] mb-[10px] font-semibold flex item-center">Portfolio <IoMdStar className="text-[#FF0000] text-[7px]" /></p>
  <Input type="email" label="Enter link here" className="w-[810px] h-[50px] my-[5px] bg-white" variant="bordered"/>
  <p className="mt-[15px] mb-[10px] font-semibold flex item-center">LinkedIn <IoMdStar className="text-[#FF0000] text-[7px]"/></p>
  <Input type="email" label="Enter link here" className="w-[810px] h-[50px] my-[5px] bg-white " variant="bordered"/>
  <Button className="bg-[#2A2A2A] w-[810px] h-[50px] text-white mt-[30px] rounded-none">Submit Application</Button>
  </div>
</div>


      </div>
    </>
)
}
export default Careerinside;