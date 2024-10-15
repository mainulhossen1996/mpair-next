import React from 'react'
import Image  from "next/image";

export const HomeService = () => {
  return (
    <div className='bg-slate-100'>
      <div className='max-w-screen-xl mx-auto py-20'>
        <h1 className='text-[50px] font-semibold'>Recent Release</h1>
        <p className='text-gray-500 text-xl text-medium mb-3'>Our expertise solutions proven by more than million users around the world</p>

        <div className='grid grid-cols-3 gap-10 my-10'>

          <div className='rounded-2xl bg-cyan-600'>
            <p className='p-6 mt-4 font-semibold text-2xl text-white'>
              Aromo Health
            </p>
            <p className='px-6 text-xl pb-6 text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem, tenetur maxime minus delectus quia! Accusamus nostrum</p>
            <div className='flex justify-center'>
            <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-16'
                height={350}
                width={350}/>
                </div>
          </div>

          <div className='rounded-2xl bg-green-500'>
            <p className='p-6 mt-4 font-semibold text-2xl text-white'>
              Go Turf
            </p>
            <p className='px-6 text-xl pb-6 text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem, tenetur maxime minus delectus quia! Accusamus nostrum</p>
            <div className='flex justify-center'>
            <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-16'
                height={350}
                width={350}/>
                </div>
          </div>

          <div className='rounded-2xl bg-sky-700'>
            <p className='p-6 mt-4 font-semibold text-2xl text-white'>
              Parkview Appointment
            </p>
            <p className='px-6 text-xl pb-6 text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem, tenetur maxime minus delectus quia! Accusamus nostrum</p>
            <div className='flex justify-center'>
            <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-16'
                height={350}
                width={350}/>
                </div>
          </div>

        </div>
      </div>
    </div>
  )
}
