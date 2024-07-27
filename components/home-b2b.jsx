import React from 'react'
import Image  from "next/image";
import { MoveRight } from "lucide-react";

export const Homeb2b = () => {
  return (
    <div className='b2b-box py-24'>
        <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-[90px] font-semibold pt-10 text-slate-600  text-start'>Affiliates & Partners</h1>
    
<div className='b2b-card border border-slate-200 py-12'>
    <p className='text-2xl text-slate-500 text-center pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam<br/> minima sapiente non quibusdam asperiores nemo ea velit porro nihil amet unde est</p>
    <div className='flex justify-center gap-12 mt-10'>
    <Image src="/image/b2b/aamarpay_logo.png"
                className='object-contain'
                height={200}
                width={200}/>

<Image src="/image/b2b/islami-bank-bangladesh.png"
                className='object-contain'
                height={100}
                width={100}/>


<Image src="/image/b2b/top-notch-digital.png"
                className='object-contain'
                height={200}
                width={200}/>
    </div>
    </div>
    <div className='flex justify-end gap-3  items-center'>
    <h3 className='text-[30px] font-semibold text-end text-[#008CFF]'>Become a Partner </h3>
    <MoveRight size={30} className='text-[#008CFF] hover:text-blue-600 pt-1' />
    </div>
    

</div>
    </div>
  )
}
