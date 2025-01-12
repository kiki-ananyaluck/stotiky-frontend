'use client'
import React from 'react'
import { IoPlaySharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import { formatDate } from '@/utils/formatDate';
import { formatDuration } from '@/utils/formatDuration';
import { RiDeleteBin5Line } from "react-icons/ri";
import { handleDeleteTrack } from '@/utils/handleDeleteTrack';
import { useSetAccessToken } from '@/hook/useSetAccessToken';

interface SearchForPlayListProps {
  playlistId: string;
  displayTrack: any[];
  setDisplayTrack: any;
  setDisplayDetail: any
  displayDetail: any
}

const TracksPlayList = ({ playlistId, displayTrack, setDisplayTrack, setDisplayDetail,displayDetail }: SearchForPlayListProps) => {
  const { accessToken } = useSetAccessToken();

  const see = () => {
    console.log("playlistId", playlistId)
    console.log("displayTrack", displayTrack)
  }

  return (
    <div className='mx-4'>
      <button onClick={see}>see</button>
      <div className='flex mb-8'>
        <div className="bg-[#3BE477] w-14 h-14 flex items-center pl-[17px] rounded-full hover:cursor-pointer">
          <IoPlaySharp className="w-6 h-6 text-[#2A2A2A]" />
        </div>
      </div>
      <div className='overflow-x-scroll xl:overflow-x-hidden'>
        <div className='w-[0px] xl:w-full'>
          <table className='xl:w-full table xl:table-fixed'>
            <thead>
              <tr className='border-b border-gray-100 text-[#afafaf]'>
                <th className='w-10 text-start'>#</th>
                <th className='w-[300px] py-2 text-start'>ชื่อ</th>
                <th className='w-[350px] text-start'>อัลบั้ม</th>
                <th className='text-start'>วันที่เพิ่ม</th>
                <th className='text-start'><FaRegClock /></th>
                <th className='w-12'></th>
              </tr>
            </thead>
            <tbody>
              {displayTrack.map((item, index) => (
                <tr key={index}>
                  <td className='text-[#afafaf]'>{index + 1}</td>
                  <td className='flex my-2'>
                    <Image
                      src={item.track.album.images[0].url}
                      alt="Album cover"
                      width="50"
                      height="50"
                      style={{ borderRadius: "10%" }}
                    />
                    <div className='flex flex-col ml-3'>
                      <h4>{item.track.name}</h4>
                      <p className='text-sm text-[#afafaf]'>{item.track.artists[0].name}</p>
                    </div>
                  </td>
                  <td className='text-[#afafaf] text-sm'>{item.track.album.name}</td>
                  <td className='text-[#afafaf] text-sm'>{formatDate(item.added_at)}</td>
                  <td className='text-[#afafaf] text-sm'>{formatDuration(item.track.duration_ms)}</td>
                  <td className='text-[#afafaf] text-sm'>
                    <RiDeleteBin5Line
                      className='w-5 h-5 text-[#afafaf] cursor-pointer'
                      onClick={() => handleDeleteTrack(item.track.id, displayDetail.snapshot_id, playlistId, accessToken, setDisplayTrack, setDisplayDetail)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TracksPlayList;
