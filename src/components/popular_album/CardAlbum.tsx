"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const CardAlbum = ({ getAlbum }: any) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsToShow = windowWidth >= 2000 ? 8 : windowWidth >= 1500 ? 6 : windowWidth >= 1024 ? 5 : windowWidth >= 768 ? 3 : 2;

  return (
    <div className='flex gap-4 justify-around'>
      {getAlbum.slice(0, itemsToShow).map((artist: any, index: number) => (
        <div key={index}>
          <Image
            src={artist.images[0].url}
            alt="dsfsd"
            width="180"
            height="180"
            style={{ borderRadius: "10%" }}
          />
          <p className='text-base w-[180px] my-2'>{artist.name}</p>
          <p className='text-[#afafaf]'>{artist.artists[0].name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardAlbum;
