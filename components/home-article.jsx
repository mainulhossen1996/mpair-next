// import React from 'react'

// export const HomeArticle = () => {
//   return (
//     <div className='max-w-screen-xl mx-auto py-20'>
//         <h1 className='text-[50px] font-semibold'>Articles & Activities</h1>
//         <p className='text-gray-500 text-xl mb-3'>Our expertise solutions proven by more than million users around the world</p>
//         <div className='flex gap-4 mt-10'>
//             <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
//                 <p>A</p>
//             </div>

//             <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
//                 <p>B</p>
//             </div>

//             <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
//                 <p>C</p>
//             </div>

//         </div>
//     </div>
//   )
// }


import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

export const HomeArticle = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-20'>
      <h1 className='text-[50px] font-semibold'>Articles & Activities</h1>
      <p className='text-gray-500 text-xl mb-3'>Our expertise solutions proven by more than million users around the world</p>
      <div className='flex gap-4 mt-10'>
        <div
          className='relative w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6 bg-cover bg-center transition-all duration-500 group'
          style={{
            backgroundImage: "url('https://i.ibb.co.com/vYy5JFw/e1fbb713168fd76718bf48a49f5f48b0.jpg')",
            filter: 'grayscale(100%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
        >
          
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>
          <div className='relative z-10 text-white'>
           <p className='font-bold my-[10px]'>Case Study</p>
           <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. </p>
          </div>
          <Link href="/blogs"><button className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transition-opacity duration-300 z-10'>
          <GoArrowUpRight className='text-[28px]' />
          </button></Link>
        </div>

        <div
          className='relative w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6 bg-cover bg-center transition-all duration-500 group'
          style={{
            backgroundImage: "url('https://i.ibb.co.com/By9wY1q/fe81f5cd5d0291d48b8b2475dc03e694.jpg')",
            filter: 'grayscale(100%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
        >
       
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>
          <div className='relative z-10 text-white'>
           <p className='font-bold my-[10px]'>Business Article</p>
           <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. </p>
          </div>
          <Link href="/blogs"><button className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transition-opacity duration-300 z-10'>
          <GoArrowUpRight className='text-[28px]' />
          </button></Link>
        </div>

        <div
          className='relative w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6 bg-cover bg-center transition-all duration-500 group'
          style={{
            backgroundImage: "url('https://i.ibb.co.com/0QBt0qL/e398c5f35696d20cedc275f8a35b5925.jpg')",
            filter: 'grayscale(100%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>
          <div className='relative z-10 text-white'>
           <p className='font-bold my-[10px]'>Research</p>
           <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. </p>
          </div>
          <Link href="/blogs"><button className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transition-opacity duration-300 z-10'>
          <GoArrowUpRight className='text-[28px]' />
          </button></Link>
        </div>

        <div
          className='relative w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6 bg-cover bg-center transition-all duration-500 group'
          style={{
            backgroundImage: "url('https://i.ibb.co.com/K9sk5kv/01d2b9a95810271e7d60e8f523dbdb92.jpg')",
            filter: 'grayscale(100%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
        >
       
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>
          <div className='relative z-10 text-white'>
           <p className='font-bold my-[10px]'>Marketing Tips</p>
           <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. Lorem ipsum dolor sit amet consectetur. A quis phasellus habitasse eget felis dictum habitant. </p>
          </div>
          <Link href="/blogs"><button className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transition-opacity duration-300 z-10'>
          <GoArrowUpRight className='text-[28px]' />
          </button></Link>
        </div>
      </div>
    </div>
  );
};
