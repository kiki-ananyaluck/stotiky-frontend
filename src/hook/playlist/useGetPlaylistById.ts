'use client'
import { getPlaylistByUserId, getPopularPlaylist } from '@/_service/playlist';
import { useState, useEffect } from 'react';

interface getRequestDataProps {
  accessToken: string;
  user_id:string
}

interface Playlist {
  name: string;
  type: string;
  images: { url: string }[];
}

export function useGetPlaylistById({
  accessToken,
  user_id
}: getRequestDataProps) {
  const [getPlaylistById, setGetPlaylistById] = useState<Playlist[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        try {
          const response = await getPlaylistByUserId(accessToken,user_id);
          if (response?.status === 200) {
            const data = response.data.playlist;
            setGetPlaylistById(data || []);
          }
        } catch (error) {
          console.log("Error from searchRequest()", error);
          setGetPlaylistById([]);
        }
      }
    };

    fetchData();
  }, [accessToken,user_id]);

  return { getPlaylistById, setGetPlaylistById };
}
