import React from 'react'
import Image from "next/image";

export const HomeExpert = () => {
  return (
    <div className='max-w-screen-2xl mx-auto py-20'>
        <h1 className='text-start text-[90px] font-semibold'>We Are Expert In</h1>
 
        <div className='flex overflow-auto gap-10 my-20'>
            <div className='min-w-[400px] expert-item '>
                    <p className='text-[50px] font-bold text-slate-300'>
                        UI/UX Design
                    </p>
                    <p className='text-xl text-medium'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed.
                    </p>

                    <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-10'
                height={300}
                width={300}/>
                
            </div>

            <div className='min-w-[400px] expert-item'>
                    <p className='text-[50px] font-bold text-slate-300'>
                        Cloud Software
                    </p>
                    <p className='text-xl text-medium'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed.
                    </p>

                    <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-10'
                height={300}
                width={300}/>
                
            </div>

            <div className='min-w-[400px] expert-item'>
                    <p className='text-[50px] font-bold text-slate-300'>
                        Mobile App
                    </p>
                    <p className='text-xl text-medium'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed.
                    </p>

                    <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-10'
                height={300}
                width={300}/>
                
            </div>

            <div className='min-w-[400px] expert-item'>
                    <p className='text-[50px] font-bold text-slate-300'>
                        Marketing
                    </p>
                    <p className='text-xl text-medium'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed.
                    </p>

                    <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-10'
                height={300}
                width={300}/>
                
            </div>
            <div className='min-w-[400px] expert-item'>
                    <p className='text-[50px] font-bold text-slate-300'>
                        Robotics & IoT
                    </p>
                    <p className='text-xl text-medium'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed.
                    </p>

                    <Image src="/image/ServiceImage/preview.png"
                className='object-contain mt-10'
                height={300}
                width={300}/>
                
            </div>
        </div>
    </div>
  )
}
