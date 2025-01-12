"use client"

import React from 'react'
import { Button } from 'antd';

const FooterBanner = () => {
  return (
    <div className='relative'>
      <div className='fixed bottom-0 flex justify-between items-center py-2 px-8 bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 w-full'>
        <div>
          <h2>ตัวอย่างของ Spotiky</h2>
          <h3>ลงทะเบียนเพื่อฟังเฟลงและพอดแคสต์ได้แบบไม่จำกัดและมีโฆษนาคั่นเป็นครั้งคราวไม่ต้องใช้บัตรเคดิต</h3>
        </div>
        <div>
          <Button type="primary" shape="round" variant="solid" 
            style={{
              color: 'black',
              fontWeight: '800',
              fontSize: '18px',
              height: '40px',
              paddingLeft: '30px',
              paddingRight: '30px',
            }}>
            ลงทะเบียนฟรี
          </Button>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner