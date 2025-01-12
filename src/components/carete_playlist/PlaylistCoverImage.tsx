import React from 'react'
import { FiMusic } from 'react-icons/fi'
import { MdOutlineCreate } from 'react-icons/md'

const PlaylistCoverImage = () => {
  return (
    <div>
      <div className='h-full w-[170px] bg-[#282828] flex justify-center items-center group'>
        <FiMusic className='w-[60px] h-[60px] text-[#afafaf] group-hover:hidden' />
        <div>
          <MdOutlineCreate className='w-[60px] h-[60px] text-white group-hover:block hidden' />
          <div className='group-hover:block hidden text-white text-base mt-2'>
            เลือกภาพ
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCoverImage