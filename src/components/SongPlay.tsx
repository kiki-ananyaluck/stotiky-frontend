"use client"

import React from 'react'
import { ImSpotify } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { HiArchiveBox } from "react-icons/hi2";
import { Input, Tooltip } from 'antd';
import { Button } from 'antd';

const SongPlay = () => {

  const handleLogin = () => {
    // ส่งคำขอไปยัง API ของ backend เพื่อเริ่มกระบวนการล็อกอิน
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/login`; // นี้จะเปลี่ยนเส้นทางไปยัง Spotify Login
  };



  return (
    <div className='relative'>
      <div className='fixed bottom-0 flex justify-between items-center py-2 px-8 bg-red-500 w-full'>
        <div>
          <ImSpotify className="text-white w-10 h-10" />
        </div>
        <div className='flex gap-2'>
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
                borderRadius: '25px'
              }}
              placeholder="เล่นอะไรดี"
              prefix={
                <Tooltip title="ค้นหา">
                  <FiSearch className='w-6 h-6' />
                </Tooltip>
              }
              suffix={
                <Tooltip title="รายการ">
                  <HiArchiveBox className='w-6 h-6' />
                </Tooltip>
              }
              className="input-box"
            />
          </div>

        </div>
        <div>
          <Button type="link" shape="round" style={{ fontWeight: '500', fontSize: '18px' }} onClick={handleLogin}>
            ลงทะเบียน
          </Button>
          <Button type="primary" shape="round" variant="solid" style={{ color: 'black', fontWeight: '500', fontSize: '18px', height: '50px' }}>
            เข้าสู่ระบบ
          </Button>
        </div>

      </div>
    </div>
  )
}

export default SongPlay