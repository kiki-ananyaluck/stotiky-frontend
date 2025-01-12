"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";


const CardPlaylist = ({ getPlaylist }:any) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();  // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsToShow = windowWidth >= 2000 ? 8 : windowWidth >= 1500 ? 6 : windowWidth >= 1024 ? 5 : windowWidth >= 768 ? 3 : 2; 
  return (
    <div className='flex gap-4 justify-around'>
      {getPlaylist.slice(0, itemsToShow).map((item: any, index: number) => (
        <div key={index}>
          <Image
            src={item.images[0].url}
            alt={item.name}
            width={180}
            height={180}
            style={{ borderRadius: "10%" }}
          />
          <p className='text-base w-[180px] my-2'>{item.name}</p>
          <p className='text-[#afafaf]'>โดย {item.owner.display_name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPlaylist;
