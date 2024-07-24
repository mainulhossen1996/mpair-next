
'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image  from "next/image";
import { MoveRight } from "lucide-react";

const Pair = () => {

return(
    <>
    <div className='bg-slate-100'>
        <div className='text-center max-w-screen-2xl py-12 mx-auto'>
            <div className='flex justify-center gap-2 items-center'>
            <p className='text-2xl font-semibold leading-10'>More Than 20 Brands Have Paired With Us</p>
        <Link href="/clients" className="text-sm text-gray-400 hover:text-blue-600">
        <MoveRight className="ml-2" size={22}/>
        </Link>
            </div>
           

        <div className='flex gap-16 justify-center mt-10'>
            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/Family-planning.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Family Planning'
                height={60}
                width={60}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/Metro-Meals.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Metro Meals'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/parkv.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Parkview Hospital Ltd.'
                height={70}
                width={140}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/al-hasanain.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Al Hasanain'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/qurex.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Qrex Diagnostic'
                height={70}
                width={140}/>
            </div>
            

            <div className='flex justify-center mb-8 '>
                <Image src="/image/clients/aromo.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Aromo Health'
                height={60}
                width={60}/>
            </div>
            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/epic.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Epic Properties Ltd.'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/ahis.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Al-Hidaayah International School'
                height={70}
                width={180}/>
            </div>

            

            
            
            
           

            

            {/* <div className='flex justify-center mb-8'>
                <Image src="/image/clients/voltec.png"
                className='object-contain'
                height={70}
                width={140}/>
            </div> */}


            
{/* 
            <div className='flex justify-center mb-8'>
                <Image src="/image/clients/amanah2.png"
                className='object-contain'
                height={70}
                width={140}/>
            </div> */}

            

        </div>
        </div>
    </div>
    </>
)
}
export default Pair;