"use client"

import React, { useState } from 'react'
import { ImSpotify } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { HiArchiveBox } from "react-icons/hi2";
import { Input, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { handleLogin } from '@/utils/handleLogin';
import Image from "next/image";
import { useSetAccessToken } from '@/hook/useSetAccessToken';
import { useGetUserProfile } from '@/hook/useGetUserProfile';
import { useRouter } from 'next/navigation';
import { FaRegUserCircle } from "react-icons/fa";
import { handleSearchChange } from '@/utils/handleSearchChange';

const NavbarProfile = () => {
  const router = useRouter();
  const { accessToken, userID, setAccessToken, setUserID } = useSetAccessToken();
  const { profile } = useGetUserProfile({ accessToken, userID });
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setAccessToken('');
    setUserID('');
    router.push('/');
  };


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p onClick={() => handleLogout()} className='text-sm'>
          ออกจากระบบ
        </p>
      ),
    },
  ];

  const see = () => {
    console.log(profile)
  }

  return (
    <div className='flex justify-between items-center py-2 px-8 bg-[#000000] w-full'>
      <div>
        <ImSpotify className="text-white w-10 h-10" />
      </div>
      {/* <div className='flex gap-2'>
        <div className="bg-[#2A2A2A] w-12 h-12 flex items-center justify-center rounded-full">
          <GoHomeFill className="text-white w-6 h-6" />
        </div>

        <div>
          <Input
            style={{
              backgroundColor: '#2A2A2A',
              color: 'white',
              height: '50px',
              width: '350px',
              borderRadius: '25px',
            }}
            placeholder="เล่นอะไรดี"
            prefix={
              <Tooltip title="ค้นหา">
                <FiSearch className='w-6 h-6 text-[#afafaf]' />
              </Tooltip>
            }
            suffix={
              <Tooltip title="รายการ">
                <HiArchiveBox className='w-6 h-6 text-[#afafaf]' />
              </Tooltip>
            }
            onChange={(e) => handleSearchChange(
              e,
              setQuery,
              setLoading,
              setResults,
              accessToken
            )}
            className="input-box"
          />
        </div>

      </div> */}

      <Dropdown menu={{ items }} placement="bottomRight">
        <Button type="link" style={{ fontWeight: '500', fontSize: '18px', padding: '2px' }}>
          <FaRegUserCircle className='text-white w-9 h-9' />
        </Button>
      </Dropdown>
    </div>
  )
}

export default NavbarProfile