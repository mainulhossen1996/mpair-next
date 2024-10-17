'use client'
import {Divider} from "@nextui-org/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Blog = () => {
  return (
    <>
      <div className="w-[1000px] mx-auto flex flex-col items-start">
        <div >
          <p className="text-[#008CFF] font-bold mt-[50px] text-left">BUSINESS BLOG</p>
          <p className="text-[#2A2A2A] text-[38px] font-bold my-[20px] text-left">
            Why Digital Presence Can Enhance the Trust of Your Customers in Modern Business.
          </p>
        </div>

        <div className="w-[949px] h-[399px] bg-black mt-[50px]"></div>  
         

         <div className="my-[50px]">
            <div className="my-[25px]">
              <p className="text-[#2A2A2A] text-[20px] font-bold my-[10px]">Building Trust in the Digital Age: The Essential Role of Online Presence</p>
              <p className="text-[#5F5F5F] text-[16px]">In todays interconnected world, establishing a strong digital presence is no longer optional for businesses; it is a necessity. As consumers increasingly turn to the internet to inform their purchasing decisions, the way a business presents itself online can significantly influence customer trust and loyalty. This article explores how a well-crafted digital presence can enhance customer trust and why it is crucial for modern businesses.</p>
            </div>
            <div className="my-[25px]">
              <p className="text-[#2A2A2A] text-[20px] font-bold my-[10px]">The Foundation of Credibility</p>
              <p className="text-[#5F5F5F] text-[16px]">A professional and well-maintained website serves as the cornerstone of digital credibility. When customers land on a polished, user-friendly site, it instills confidence in the legitimacy and reliability of the business. Essential features like an About Us page, contact information, and customer testimonials offer transparency, helping to build trust. In contrast, a poorly designed or outdated website can deter potential customers, raising doubts about the business professionalism and trustworthiness.</p>
            </div>
            <div className="my-[25px]">
              <p className="text-[#2A2A2A] text-[20px] font-bold my-[10px]">Social Proof and Customer Engagement</p>
              <p className="text-[#5F5F5F] text-[16px]">In the age of social media, consumers often look to platforms like Facebook, Instagram, and LinkedIn to gauge a companys reputation. Active and engaging social media profiles allow businesses to showcase their values, respond to customer inquiries, and share positive customer experiences. This interaction provides social proof, reassuring potential customers that others have had satisfactory experiences. Moreover, regular updates and responsiveness to customer comments demonstrate that the business is active and attentive, further solidifying trust.</p>
            </div>
            <div className="my-[25px]">
              <p className="text-[#2A2A2A] text-[20px] font-bold my-[10px]">Content as a Trust-Building Tool</p>
              <p className="text-[#5F5F5F] text-[16px]">Content marketing plays a pivotal role in establishing authority and trust. By consistently publishing high-quality content that addresses customer needs and interests, businesses can position themselves as industry experts. Blog posts, how-to guides, video tutorials, and informative articles not only drive traffic but also provide valuable insights that help customers make informed decisions. This approach not only enhances the customers experience but also builds a long-term relationship based on trust and value.</p>
            </div>
         </div>
         <Divider className="my-4" />
         <div className="self-end flex items-center gap-[10px]">
          <p className="text-[#2A2A2A] text-[16px] font-bold text-right">Share With</p>
          <div className="flex gap-[8px]">
          <FaFacebookSquare className="text-[#4D4D4D]"/>
          <FaSquareXTwitter className="text-[#4D4D4D]"/>
          <FaLinkedin className="text-[#4D4D4D]"/>
          </div>
        </div>
         <Divider className="my-4" />
       
      </div>
    </>
  );
}

export default Blog;
