'use client'
import { getTrackPlaylistById } from '@/_service/playlist';
import { fetchTrackPlaylist } from '@/utils/fetchTrackPlaylist';
import { useState, useEffect } from 'react';

interface getRequestDataProps {
  accessToken: string;
  slug : string;
}

interface Playlist {
  name: string;
  type: string;
  images: { url: string }[];
}



export function useGetTracksPlaylist({
  accessToken,
  slug 
}: getRequestDataProps) {
  const [displayTrack, setDisplayTrack] = useState<Playlist[]>([]);
  const [displayDetail, setDisplayDetail] = useState<Playlist[]>([]);

  useEffect(() => {
    fetchTrackPlaylist(accessToken,slug,setDisplayTrack,setDisplayDetail);
  }, [accessToken,slug ]);

  return { displayTrack, setDisplayTrack,displayDetail, setDisplayDetail };
}
