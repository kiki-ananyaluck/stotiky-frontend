import React, { useEffect, useState } from 'react'
import CardArtist from './CardArtist';
import { useGetPopularArtist } from '@/hook/artist/useGetPopularArtist';

const PopularSection = () => {
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const roleIdFromLocalStorage = localStorage.getItem('access_token');
    if (roleIdFromLocalStorage) {
      setAccessToken(roleIdFromLocalStorage);
    }
  }, []);

  const { getArtist} = useGetPopularArtist(accessToken);

  return (
    <div className='w-full'>
      <div className='flex justify-between items-end my-2'>
        <h2 className='mb-2'>ศิลปินยอดนิยม</h2>
        <p className='mb-2 text-[#afafaf]'>แสดงทั้งหมด</p>
      </div>
      <CardArtist
        getArtist={getArtist} 
      />
    </div>
  )
}

export default PopularSection;
