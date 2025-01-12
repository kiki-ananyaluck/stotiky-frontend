"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Button } from 'antd';
import { addTrackToPlaylist } from '@/utils/addTrackToPlaylist';
import { useSetAccessToken } from '@/hook/useSetAccessToken';
import { useGetTracksPlaylist } from '@/hook/playlist/useGetTracksPlaylist';

interface DisplaySongRowProps {
  results: any[];
  playlistId: string;
  setDisplayTrack: any
  setDisplayDetail:any
}

const DisplaySongRow = ({ results, playlistId, setDisplayTrack,setDisplayDetail }: DisplaySongRowProps) => {
  const { accessToken } = useSetAccessToken();
  return (
    <>
      {results.map((track: any, index: number) => (
        <div className="flex justify-between items-center gap-4 my-4" key={index}>
          <div className="flex items-center gap-4 w-1/4">
            <Image
              src={track.album.images[0].url}
              alt="Album cover"
              width="50"
              height="50"
              style={{ borderRadius: "10%" }}
            />
            <div>{track.name}</div>
          </div>
          <div className="text-start w-1/4">{track.artists[0].name}</div>
          <div>
            <Button
              shape="round"
              variant="outlined"
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: '14px',
                height: '30px',
                backgroundColor: '#121212',
                borderColor: 'white',
              }}
              onClick={() => addTrackToPlaylist(track, playlistId, accessToken, setDisplayTrack,setDisplayDetail)}
            >
              เพิ่ม
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplaySongRow;
