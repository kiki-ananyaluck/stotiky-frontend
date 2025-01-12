"use client"
import React, { useState } from 'react'
import Modal from 'react-modal';
import { FiMusic } from "react-icons/fi";
import { MdOutlineCreate } from "react-icons/md";
import EditDisplayCoverModel from '../carete_playlist/EditDisplayCoverModel';

const PlayListHeader = (displayDetail:any) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    console.log("open")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const see = () => {
    console.log("displayDetail",)
  }

  return (
    <div className="bg-gradient-to-b from-[#696969] to-[#2E2E2E] h-64 px-4 flex items-center">
      <div className='flex items-end gap-4'>
        {/* <button onClick={see}>see</button> */}
        <div className='h-[200px] w-[200px] bg-[#2A2A2A] flex justify-center items-center group'>
          <FiMusic className='w-[70px] h-[70px] text-[#afafaf] group-hover:hidden' />
          <div onClick={showModal}>
            <MdOutlineCreate className='w-[70px] h-[70px] text-white group-hover:block hidden group-hover:cursor-pointer' />
            <div className='group-hover:block hidden text-white text-base mt-2'>
              เลือกภาพ
            </div>
          </div>
        </div>
        <div>
          <h5 className='text-[#afafaf]'>เพลย์ลิสต์</h5>
          <div onClick={showModal} className='hover:cursor-pointer'>
            <h1 className='text-[60px]'>{displayDetail.displayDetail.name}</h1>
          </div>
          <h6 className='text-sm'>{displayDetail.displayDetail.owner.display_name}</h6>
        </div>
      </div>

      <Modal ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <EditDisplayCoverModel closeModal={closeModal} />
      </Modal>

    </div>
  )
}

export default PlayListHeader;
