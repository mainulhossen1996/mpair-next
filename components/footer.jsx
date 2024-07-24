import Image from 'next/image'
import { Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {

    return (
      <>
<footer class="mt-auto max-w-screen-2xl pt-10 mx-auto footer">
  <div class="text-center">
<div className='max-w-screen-lg mx-auto mb-20'>
  <div className='p-6 h-[150px] bg-blue-600 rounded-xl'>
    <p className='font-medium text-2xl text-white text-start'>
      Pair With Us
    </p>
    <p className='font-thin text-lg text-white text-start'>
      Our sales team always open to communicate and hear your demand.
    </p>
  </div>
</div>

<div className='grid grid-cols-5 gap-20 mb-4 border-b-1 border-b pb-4'>
  <div>
  <Image src="/image/mPair.png"
                className='object-contain mb-4 grayscale grayscale-100'
                height={150}
                width={150}/>
    <p className='font-medium text-sm text-start text-gray-500'>
      mPair Technologies is one of the latest tech solution, located in Chattogram, Bangladesh.
    </p>

    <div class="mt-3 text-start space-x-2">
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full  text-gray-500 hover:text-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
       <Facebook size={20} />
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full  text-gray-500 hover:text-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      <Youtube size={20} />
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full  text-gray-500 hover:text-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      <Instagram size={20} />
      </a>
    </div>
  </div>

  <div className='text-start'>
    <p className='font-medium text-md text-gray-500 mb-4'>
      Company
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      About Us
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Clients
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Career
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Articles & Events
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      Company Profile
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      Legal Copies
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      Terms & Condition
    </p>
  </div>


  <div className='text-start'>
    <p className='font-medium text-md text-gray-500 mb-4'>
      Services
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      UI/UX Design
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Cloud Software
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Mobile App
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Marketing
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
     Robotics & IoT
    </p>
  </div>


  <div className='text-start'>
    <p className='font-medium text-md text-gray-500 mb-4'>
      Products
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      SchoolSys
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      DokaniBhai
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Someekoron
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      docAppoint
    </p>
  </div>

  <div className='text-start'>
    <p className='font-medium text-md text-gray-500 mb-4'>
      Contact
    </p>

    <p className='font-light text-sm text-gray-400 mb-1'>
      SchoolSys
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      DokaniBhai
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      Someekoron
    </p>
    <p className='font-light text-sm text-gray-400 mb-1'>
      docAppoint
    </p>
  </div>

</div>


    <div class="mb-4">
<p class="text-gray-500 dark:text-neutral-500 text-sm">© mPair Technologies Ltd. 2024. All rights reserved.</p>
    </div>




  </div>

</footer>

      </>
    );
};
export default Footer;