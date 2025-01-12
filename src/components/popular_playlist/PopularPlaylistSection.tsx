"use client"
import React, { useEffect, useState } from 'react'
import { useGetPopularPlaylist } from '@/hook/playlist/useGetPopularPlaylist';
import CardPlaylist from './CardPlaylist';

const PopularPlaylistSection = () => {
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const roleIdFromLocalStorage = localStorage.getItem('access_token');
    if (roleIdFromLocalStorage) {
      setAccessToken(roleIdFromLocalStorage);
    }
  }, []);

  const { getPlaylist } = useGetPopularPlaylist({ accessToken });

  return (
    <div className='w-full'>
      <div className='flex justify-between items-end my-2'>
        <h2 className='mb-2'>ศิลปินยอดนิยม</h2>
        <p className='mb-2 text-[#afafaf]'>แสดงทั้งหมด</p>
      </div>
      <CardPlaylist
        getPlaylist={getPlaylist}
      />
    </div>
  )
}

export default PopularPlaylistSection
