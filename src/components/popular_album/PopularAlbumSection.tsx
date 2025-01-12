"use client"
import React, { useEffect, useState } from 'react'
import CardAlbum from './CardAlbum';
import { useGetPopularAlbum } from '@/hook/album/useGetPopularArtist';

const PopularAlbumSection = () => {
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const roleIdFromLocalStorage = localStorage.getItem('access_token');
    if (roleIdFromLocalStorage) {
      setAccessToken(roleIdFromLocalStorage);
    }
  }, []);

  const { getAlbum } = useGetPopularAlbum({ accessToken });

  return (
    <div className='w-full'>
      <div className='flex justify-between items-end my-2'>
        <h2 className='mb-2'>อัลบั้มและซิงเกลยอดนิยม</h2>
        <p className='mb-2 text-[#afafaf]'>แสดงทั้งหมด</p>
      </div>
      <CardAlbum
        getAlbum={getAlbum}
      />
    </div>
  )
}

export default PopularAlbumSection;
