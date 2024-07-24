import React from 'react'
import Image  from "next/image";

export const HomeHow = () => {
  return (
    <div className='how-bg'>
        <div className='max-w-screen-2xl mx-auto py-20'>
            <div className=''>
            <h1 className='text-[70px] text-slate-400 font-semibold text-start'>
                HOW WE AUTOMATE
            </h1>
            
            </div>

            <div className='grid grid-cols-5 gap-4'>
                <div className='w-full bg-white h-[400px] rounded-2xl px-6'>
                    <p className='text-[90px] text-end text-slate-100 font-semibold'>01</p>

                    <Image src="/image/how/bipolar.png"
                className='object-contain mt-16 mb-4 grayscale grayscale-100'
                height={40}
                width={40}/>
                    <p className='text-2xl font-semibold text-gray-800'>Empathize</p>
                    <p className='text-md mt-2 text-gray-700'>Define the challange & explore the human context</p>
                </div>

                <div className='w-full bg-white h-[400px] rounded-2xl px-6'>
                    <p className='text-[90px] text-end text-slate-100 font-semibold'>02</p>

                    <Image src="/image/how/aim.png"
                className='object-contain mt-16 mb-4 grayscale grayscale-100'
                height={40}
                width={40}/>
                    <p className='text-2xl font-semibold text-gray-800'>Define</p>
                    <p className='text-md mt-2 text-gray-700'>Research, observe, understand & create a point of view</p>
                </div>

                <div className='w-full bg-white h-[400px] rounded-2xl px-6'>
                    <p className='text-[90px] text-end text-slate-100 font-semibold'>03</p>

                    <Image src="/image/how/idea.png"
                className='object-contain mt-16 mb-4 grayscale grayscale-100'
                height={40}
                width={40}/>
                    <p className='text-2xl font-semibold text-gray-800'>Ideate</p>
                    <p className='text-md mt-2 text-gray-700'>Brainstorm ideas good or bad, dont stop at the obvious</p>
                </div>

                <div className='w-full bg-white h-[400px] rounded-2xl px-6'>
                    <p className='text-[90px] text-end text-slate-100 font-semibold'>04</p>

                    <Image src="/image/how/3d.png"
                className='object-contain mt-16 mb-4 grayscale grayscale-100'
                height={40}
                width={40}/>
                    <p className='text-2xl font-semibold text-gray-800'>Prototype</p>
                    <p className='text-md mt-2 text-gray-700'>Start creating, experiment, fall cheap, & fast</p>
                </div>

                <div className='w-full bg-white h-[400px] rounded-2xl px-6'>
                    <p className='text-[90px] text-end text-slate-100 font-semibold'>05</p>

                    <Image src="/image/how/launch.png"
                className='object-contain mt-16 mb-4 grayscale grayscale-100'
                height={40}
                width={40}/>
                    <p className='text-2xl font-semibold text-gray-800'>Launch</p>
                    <p className='text-md mt-2 text-gray-700'>Implement the product, show & start to refine the product</p>
                </div>

                

            </div>
            <div className=''>
            <h1 className='text-[70px] text-slate-400 font-semibold text-end'>
                YOUR BUSINESS PROCESS 
            </h1>
            
            </div>
            

        </div>
    </div>
  )
}
