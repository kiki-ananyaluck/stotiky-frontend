'use client'
import { getPopularPlaylist } from '@/_service/playlist';
import { useState, useEffect } from 'react';

interface getRequestDataProps {
  accessToken: string;
}

interface Playlist {
  name: string;
  type: string;
  images: { url: string }[];
}

export function useGetPopularPlaylist({
  accessToken,
}: getRequestDataProps) {
  const [getPlaylist, setGetPlaylist] = useState<Playlist[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        try {
          const response = await getPopularPlaylist(accessToken);
          if (response?.status === 200) {
            const data = response.data.data;
            setGetPlaylist(data || []);
          }
        } catch (error) {
          console.log("Error from searchRequest()", error);
          setGetPlaylist([]);
        }
      }
    };

    fetchData();
  }, [accessToken]);

  return { getPlaylist, setGetPlaylist };
}
