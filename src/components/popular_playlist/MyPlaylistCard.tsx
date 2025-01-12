import React from 'react'
import { LuMusic } from "react-icons/lu";
import { useRouter } from 'next/navigation';
export const MyPlaylistCard = (getPlaylistById: any) => {

  const router = useRouter();
  const see = () => {
    console.log("getPlaylistById", getPlaylistById.getPlaylistById.items)
  }

  const navigateToPlaylist = async (item:any) => {
    router.push(`/playlist/${item.id}`);
  }

  return (
    <div className='h-screen overflow-auto'>
      {getPlaylistById.getPlaylistById?.items?.map((track: any, index: number) => (
        <div className="flex items-center gap-2 my-4 w-full hover:cursor-pointer" key={index} onClick={() => navigateToPlaylist(track)}>
          <div className="h-[80px] w-[80px] bg-[#2A2A2A] flex justify-center items-center group mr-2">
            <LuMusic className='w-10 h-10'/>
          </div>
          <div className='flex flex-col gap-2'>
            <div>{track.name}</div>
            <div className='text-sm text-[#afafaf]'>เพลย์ลิสต์ • {track.owner.display_name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPlaylistCard
