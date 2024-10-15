import React from 'react'
import Image  from "next/image";
import { MoveRight } from "lucide-react";

export const Homeb2b = () => {
  return (
    <div className='b2b-box py-24'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex justify-between items-end'>
          <h1 className='text-[90px] font-semibold pt-10 text-slate-600  text-start -mb-3'>Affiliates & Partners</h1>
        <div className='flex justify-end gap-3  items-center'>
    <h5 className='text-[20px] font-semibold text-end text-[#008CFF] mb-2'>Become a Partner </h5>
    <MoveRight size={30} className='text-[#008CFF] hover:text-blue-600 pt-1' />
    </div>
          </div>
       
    
<div className='b2b-card border border-slate-200 py-12'>
    <p className='text-2xl text-center pt-3 px-20'>
    Elevate your business by joining our affiliate network, trusted by leading brands. Collaborate with us to seize new growth opportunities, tap into valuable resources, and broaden your reach. Drive results and achieve more together. Start your journey with us today!

    </p>
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

    

</div>
    </div>
  )
}
