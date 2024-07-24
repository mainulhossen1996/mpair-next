import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const HomeProduct = () => {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { id: 1, label: 'Education'},
    { id: 2, label: 'Store'},
    { id: 3, label: 'Project'},
    { id: 4, label: 'Health Care'},
    ,]
  return (
    <section className='product-bg'>
    <div className='max-w-screen-2xl mx-auto py-20'>
        <h1 className='text-center text-[60px] font-semibold'>Our Products For Your Business</h1>
        <p className="mb-3 font-medium text-xl text-center text-gray-500">
            Explore mPair Products to meet the diverse requirements of desired
            industries.
          </p>


          <div className='max-w-screen-lg mx-auto mt-10 pb-20'>

          <div className="flex mb-4">
  <ul className="flex items-center gap-4 mx-auto">
    {tabs.map((tab, index) => (
      <li key={index}>
        <button
          className={`inline-flex items-center px-3 lg:px-6 py-1 text-[14px] lg:text-[16px] duration-200 font-[550] gap-2 ${
            activeTab === tab.id ? 'text-[#008CFF] lg:border-2 border-2 border-[#008CFF] rounded-full' : 'text-gray-600 border-2 lg:border-2 border-transparent'
          }`}
          onClick={() => changeTab(tab.id)}
        >
          {tab.label}
        </button>
      </li>
    ))}
  </ul>
</div>

{activeTab === 1 ? <div>
  <div className='rounded-3xl h-[500px] bg-white shadow-xl shadow-sky-100'>
            <div className='flex h-full'>
              <div className='w-4/12 bg-slate-200 rounded-s-3xl'>
                <div className='px-8 pt-12'>
                <Image src="/image/product/schoolsys.png"
                className='object-contain h-[60px]'
                height={100}
                width={180}
                />
                <p className='font-light text-[16px] py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nemo et nulla tenetur quibusdam harum praesentium maiores optio
                  </p>
                </div>

                <div className='px-8'>
                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Fees Management</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Acamedic Reports</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Accounts & Banking</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>HRM Management</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Store & Procurement</p>
                    </div>
                    <Link href="/" className='my-2 pb-2 flex gap-3'>
                    <p className='text-sm font-semibold text-blue-700'>Learn More</p>
                    <MoveRight className="ml-2 text-gray-400 hover:text-blue-600" size={22}/>
                    </Link>
                  </div>
              </div>
              <div className='w-8/12 ps-20 flex items-end product-box rounded-br-3xl'>
              <Image src="/image/product/schoolsys-sample.png"
                className='object-cover rounded-br-3xl'
                height={100}
                width={700}
                />
              </div>
            </div>
          </div>
          </div>
         : null}

        {activeTab === 2 ? <div>
          <div className='rounded-3xl h-[500px] bg-white shadow-xl shadow-sky-100'>
            <div className='flex h-full'>
              <div className='w-4/12 bg-slate-200 rounded-s-3xl'>
              <div className='px-8 pt-12'>
                <Image src="/image/product/schoolsys.png"
                className='object-contain h-[60px]'
                height={100}
                width={180}
                />
                <p className='font-light text-[16px] py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nemo et nulla tenetur quibusdam harum praesentium maiores optio
                  </p>
                </div>

                <div className='px-8'>
                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Product Inventory</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>POS Terminal</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Multi Branch</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Integrated E-Commerce</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Marketing Campaign</p>
                    </div>
                    <Link href="/" className='my-2 pb-2 flex gap-3'>
                    <p className='text-sm font-semibold text-blue-700'>Learn More</p>
                    <MoveRight className="ml-2 text-gray-400 hover:text-blue-600" size={22}/>
                    </Link>
                  </div>
                
              </div>
              <div className='w-8/12 ps-20 flex items-end product-box rounded-br-3xl'>
              <Image src="/image/product/dokani-sample.png"
                className='object-cover rounded-br-3xl'
                height={100}
                width={700}
                />
              </div>
            </div>
          </div>
        </div> : null}

        {activeTab === 3 ? <div>
          <div className='rounded-3xl h-[500px] bg-white shadow-xl shadow-sky-100'>
            <div className='flex h-full'>
              <div className='w-4/12 bg-slate-200 rounded-s-3xl'>
              <div className='px-8 pt-12'>
                <Image src="/image/product/someekoron.png"
                className='object-contain h-[60px]'
                height={100}
                width={180}
                />
                <p className='font-light text-[16px] py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nemo et nulla tenetur quibusdam harum praesentium maiores optio
                  </p>
                </div>

                <div className='px-8'>
                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Project Quote</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Project Budgeting</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Team Collaboration</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Worksheet Managemnt</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Effortless Accounts</p>
                    </div>
                    <Link href="/" className='my-2 pb-2 flex gap-3'>
                    <p className='text-sm font-semibold text-blue-700'>Learn More</p>
                    <MoveRight className="ml-2 text-gray-400 hover:text-blue-600" size={22}/>
                    </Link>
                  </div>
              </div>
              <div className='w-8/12 ps-20 flex items-end product-box rounded-br-3xl'>
              <Image src="/image/product/someekoron-sample.png"
                className='object-cover rounded-br-3xl'
                height={100}
                width={700}
                />
              </div>
            </div>
          </div>
        </div> : null}

        {activeTab === 4 ? <div>
          <div className='rounded-3xl h-[500px] bg-white shadow-xl shadow-sky-100'>
            <div className='flex h-full'>
              <div className='w-4/12 bg-slate-200 rounded-s-3xl'>
              <div className='px-8 pt-12'>

                <Image src="/image/product/docappoint.png"
                className='object-contain h-[60px]'
                height={100}
                width={180}
                />
                <p className='font-light text-[16px] py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nemo et nulla tenetur quibusdam harum praesentium maiores optio
                  </p>
                </div>

                <div className='px-8'>
                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Doctors Directory</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Book Appointment</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Quee Managemnt</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Analytics</p>
                    </div>

                    <div className='my-2 border-b border-dashed border-slate-300 pb-2'>
                    <p className='text-sm'>Essential Reminder</p>
                    </div>
                    <Link href="/" className='my-2 pb-2 flex gap-3'>
                    <p className='text-sm font-semibold text-blue-700'>Learn More</p>
                    <MoveRight className="ml-2 text-gray-400 hover:text-blue-600" size={22}/>
                    </Link>
                  </div>
              </div>
              <div className='w-8/12 ps-20 flex items-end product-box rounded-br-3xl'>
              <Image src="/image/product/docappoint-sample.png"
                className='object-cover rounded-br-3xl'
                height={100}
                width={700}
                />
              </div>
            </div>
          </div>
        </div> : null}

          

          </div>
         
    </div>
    </section>
  )
}
