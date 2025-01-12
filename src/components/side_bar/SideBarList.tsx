"use client"
import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, ConfigProvider } from 'antd';
import { IoIosAdd } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";
import { PiMusicNotesPlusBold } from "react-icons/pi";
import Link from 'next/link';
import AdviseCard from './AdviseCard';
import { postPlaylist } from '@/_service/playlist';
import { useRouter } from 'next/navigation';
import { useGetPlaylistById } from '@/hook/playlist/useGetPlaylistById';
import { MyPlaylistCard } from '../popular_playlist/MyPlaylistCard';

const footer = ["กฎหมาย", "ศูนย์ความปลอดภัยและความเป็นส่วนตัว", "นโยบายความเป็นส่วนตัว", "คุ๊กกี้", "เกี่ยวกับโฆษณา", "การเข้าถึง"];

const SideBarList = () => {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const roleIdFromLocalStorage = localStorage.getItem('access_token');
    if (roleIdFromLocalStorage) {
      setAccessToken(roleIdFromLocalStorage);
    }

    const userIDFromLocalStorage = localStorage.getItem('user_id');
    if (userIDFromLocalStorage) {
      setUserID(userIDFromLocalStorage);
    }

  }, []);


  const { getPlaylistById, setGetPlaylistById } = useGetPlaylistById({ accessToken, user_id: userID });

  const handleCreatePlaylist = async () => {
    const access_token = accessToken;

    const playlistData = {
      user_id: userID,
      name: 'เพลย์ลิสต์ของฉัน',
      description: 'รายละเอียดเพลย์ลิสต์',
      public: true,
    };

    setLoading(true);

    try {
      const response: any = await postPlaylist(access_token, playlistData);
      console.log('Playlist created:', response.data);
      router.push(`/playlist/${response.data.playlist.id}`);
    } catch (error: any) {
      message.error('เกิดข้อผิดพลาดในการสร้างเพลย์ลิสต์');
      console.error('Error creating playlist:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center">
          <PiMusicNotesPlusBold className="mr-2 w-6 h-6 text-[#afafaf]" />
          <p onClick={handleCreatePlaylist} className='text-sm'>
            สร้างเพลย์ลิสต์ใหม่
          </p>
        </div>
      ),
    },
  ];


  return (
    <ConfigProvider>
      <div className="bg-[#121212] w-2/5 p-4 h-auto flex flex-col justify-between">
        <div>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <BsCollectionFill className='w-6 h-6 text-[#afafaf]' />
              <Link href="/your-target-page">
                <h3 className='text-[#afafaf]'>คอลเลกชันของคุณ</h3>
              </Link>
            </div>
            <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: false }}>
              <Button
                type="link"
                icon={<IoIosAdd className='w-8 h-8' />}
                shape="circle"
              />
            </Dropdown>
          </div>
          {getPlaylistById.length > 0 ? (
            <>
              <AdviseCard text={{ title: 'สร้างเพลย์ลิสต์แรกของคุณ', description: 'ง่ายนิดเดียวเราช่วยคุณเอง', title_button: 'สร้างเพลย์ลิสต์' }} />
              <AdviseCard text={{ title: 'มาค้นหาพอตแคสต์เพื่อคุณจะได้ติดตามกันดีกว่า', description: 'เราจะคอยอัปเดทใหม่ๆ ให้คุณ', title_button: 'เลือกดูพอดแคสต์' }} />
            </>
          ) : (
            <MyPlaylistCard getPlaylistById={getPlaylistById}/>
          )}

        </div>
        <div className='flex gap-2 flex-wrap'>
          {footer.map((item, index) => (
            <p className='text-[10px] text-[#afafaf]' key={index}>{item}</p>
          ))}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SideBarList;
