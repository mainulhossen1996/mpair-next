import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';

export const HomeExpert = () => {
  const expertContainerRef = useRef(null);
  const [isScrollingLeft, setIsScrollingLeft] = useState(true);

  const scroll = () => {
    if (expertContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = expertContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (isScrollingLeft) {
        expertContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        if (scrollLeft + 450 >= maxScrollLeft) {
          setIsScrollingLeft(false);
        }
      } else {
        expertContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
        if (scrollLeft - 450 <= 0) {
          setIsScrollingLeft(true);
        }
      }
    }
  };

  useEffect(() => {
    const { scrollLeft, scrollWidth, clientWidth } = expertContainerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (scrollLeft >= maxScrollLeft) {
      setIsScrollingLeft(false);
    } else if (scrollLeft <= 0) {
      setIsScrollingLeft(true);
    }
  }, []);

  const expertItems = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed. Similique quaerat officia magni explicabo nostrum sed.",
      imageSrc: "/image/ServiceImage/preview.png",
    },
    {
      title: "Cloud Software",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed. Similique quaerat officia magni explicabo nostrum sed.",
      imageSrc: "/image/ServiceImage/preview.png",
    },
    {
      title: "Mobile App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed. Similique quaerat officia magni explicabo nostrum sed.",
      imageSrc: "/image/ServiceImage/preview.png",
    },
    {
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed. Similique quaerat officia magni explicabo nostrum sed.",
      imageSrc: "/image/ServiceImage/preview.png",
    },
    {
      title: "Robotics & IoT",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quaerat officia magni explicabo nostrum sed. Similique quaerat officia magni explicabo nostrum sed.",
      imageSrc: "/image/ServiceImage/preview.png",
    },
  ];

  return (
    <div className='max-w-screen-2xl mx-auto py-20 expert-section'>
      <h1 className='text-start text-[100px] font-semibold'>We Are Expert In</h1>

      <div className='expert-element pt-20 whitespace-nowrap flex items-center pb-10'>
        <div
          className={`p-8 rounded-full flex items-center  justify-center mx-[50px] cursor-pointer ${isScrollingLeft ? 'bg-green-400' : 'bg-yellow-400'}`}
          onClick={scroll}
        >
          {isScrollingLeft ? <MoveLeft size={45} color='white' /> : <MoveRight size={45} color='white' />}
        </div>

        <div className='flex gap-10 px-[50px] overflow-x-auto expert-main-item' ref={expertContainerRef}>
          {expertItems.map((item, index) => (
            <div key={index} className="min-w-[450px] expert-item">
              <p className="text-[50px] font-bold text-slate-300">{item.title}</p>
              <p className="text-xl text-medium whitespace-normal break-words">{item.description}</p>
              <Image
                src={item.imageSrc}
                className="object-contain mt-10"
                height={300}
                width={300}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeExpert;
