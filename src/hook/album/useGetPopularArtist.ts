'use client'
import { getPopularAlbum } from '@/_service/getAlbum';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';


interface getRequestDataProps {
  accessToken: string
}

export function useGetPopularAlbum({
  accessToken
}: getRequestDataProps) {
  const [getAlbum, setGetAlbum] = useState<any[]>([]);

  const fetchData = async () => {
    if (accessToken) {
      try {
        const response = await getPopularAlbum(accessToken)
        if (response?.status === 200) {
          const data = response.data.data;
          setGetAlbum(data || []);
        }
      } catch (error) {
        console.log("Error from searchRequest()", error);
        setGetAlbum([]);
      } finally {
      }
    }
  };


  useEffect(() => {
    fetchData();
  }, [accessToken]);

  return { getAlbum, setGetAlbum };
}
