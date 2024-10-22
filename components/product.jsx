'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

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

        
        <div className="relative max-w-screen-xl mx-auto px-4 py-20 text-white"> 
          <div className="flex justify-between items-center"> 
            <div className="max-w-lg">
              <Image
                className="w-[232px] my-[20px]"
                src="/image/p1icon.png"
                alt="vector"
                width={232}
                height={50}
              />
              <p className="text-[48px] text-[#008CFF] font-bold">
                Effortless <br /> Project Management.
              </p>
              <p className="text-[#9A9A9A] text-[20px] font-medium">
                From Planning to Profit: Experience Business Growth <br /> Through
                Our Integrated Approach.
              </p>
            </div>

            <div className="relative w-[772px] h-[489px] bg-gradient-to-r from-[#47A8B0] to-[#1E474A] rounded-[12px]">
              <Image
                className="absolute bottom-0 right-0 w-[591px] h-[415px] rounded-tl-[20px]"
                src="/image/project1.png"
                alt="project1"
                width={591}
                height={415}
              />
            </div>
          </div>

          <div className="flex justify-between items-center my-[100px]"> 
            <div> 
              <p className="text-[#555555] text-[38px] font-bold my-[20px]">Project Planning</p>
              <p className="w-[607px] text-[#686868] text-[16px]">
                From Making Quotation to Project Completion; everything done with Someekoron. It allows project managers to define the project scope, set objectives, and establish timelines. With robust project planning capabilities, users can create detailed project schedules, assign tasks to team members, and allocate resources efficiently.
              </p>
            </div>

            <div> 
              {/* Card 1 */}
              <motion.div
                ref={ref1}
                className="shadow-md p-4 rounded-lg bg-[#FFE9D0]"
                style={{
                  width: "341px",
                  height: "178px",
                  transform: "rotate(-4deg)",
                  opacity: 0,
                }}
                animate={inView1 ? { opacity: 1, transform: "rotate(-4deg)" } : {}}
                transition={{ duration: 0.5, delay: 0.1 }} 
              >
                <Image
                  className="w-[50px] h-[50px]"
                  src="/image/vector4.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
                <p className="text-[#686868]">Project tacking</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                ref={ref2}
                className="shadow-md p-4 rounded-lg bg-[#FFFED3]"
                style={{
                  width: "341px",
                  height: "178px",
                  top: "80px", 
                  transform: "rotate(5deg)",
                  opacity: 0,
                }}
                animate={inView2 ? { opacity: 1, transform: "rotate(5deg)" } : {}}
                transition={{ duration: 0.5, delay: 0.3 }} 
              >
                <Image
                  className="w-[50px] h-[50px]"
                  src="/image/vector5.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
                <p className="text-[#686868]">Project tacking</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                ref={ref3}
                className="shadow-md p-4 rounded-lg bg-[#BBE9FF]"
                style={{
                  width: "341px",
                  height: "178px",
                  top: "160px", 
                  transform: "rotate(-5deg)",
                  opacity: 0,
                }}
                animate={inView3 ? { opacity: 1, transform: "rotate(-5deg)" } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Image
                  className="w-[50px] h-[50px]"
                  src="/image/vector6.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
                <p className="text-[#686868]">Project tacking</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                ref={ref4}
                className="shadow-md p-4 rounded-lg bg-[#B1AFFF]"
                style={{
                  width: "341px",
                  height: "178px",
                  top: "240px", 
                  transform: "rotate(7deg)",
                  opacity: 0,
                }}
                animate={inView4 ? { opacity: 1, transform: "rotate(7deg)" } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Image
                  className="w-[50px] h-[50px]"
                  src="/image/vector7.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
                <p className="text-[#686868]">Project tacking</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;