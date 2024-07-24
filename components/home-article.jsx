import React from 'react'

export const HomeArticle = () => {
  return (
    <div className='max-w-screen-2xl mx-auto py-20'>
        <h1 className='text-[50px] font-semibold'>Articles & Activities</h1>
        <p className='text-gray-500 text-xl text-medium mb-3'>Our expertise solutions proven by more than million users around the world</p>
        <div className='flex gap-4 mt-10'>
            <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
                <p>A</p>
            </div>

            <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
                <p>B</p>
            </div>

            <div className='w-4/12 hover:w-7/12 bg-slate-500 h-[300px] rounded-2xl p-6'>
                <p>C</p>
            </div>

        </div>
    </div>
  )
}
