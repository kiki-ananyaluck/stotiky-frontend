import React from 'react'
import { FiMusic } from 'react-icons/fi'
import { MdOutlineCreate } from 'react-icons/md'
import { RxCross2 } from "react-icons/rx";
import { Button } from 'antd';
import { Input } from 'antd';
import PlaylistCoverImage from './PlaylistCoverImage';
const { TextArea } = Input;

interface EditDisplayCoverModelProps {
  closeModal: () => void; 
}

const EditDisplayCoverModel: React.FC<EditDisplayCoverModelProps> = ({ closeModal }) => {
  return (
    <div className="w-[500px] h-auto">
      <div>
        <div className='flex justify-between'>
          <h2 className='mb-4'>แก้ไขรายละเอียด</h2>
          <RxCross2 className='w-6 h-6 text-[#afafaf]' onClick={closeModal} />
        </div>
        <div className='flex gap-4'>
          {/* รูป */}
          <PlaylistCoverImage />

          <div className='w-full'>
            <div>
              <p className='mb-2 text-[#afafaf]'>ชื่อ</p>
              <Input placeholder="Basic usage"
                style={{
                  backgroundColor: '#3E3E3E',
                  color: '#afafaf',
                  height: '40px',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div>
              <p className='mb-2 text-[#afafaf]'>คำอธิบาย</p>
              <TextArea
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{
                  backgroundColor: '#3E3E3E',
                  color: '#afafaf',
                  height: '40px',
                  borderRadius: '5px',
                }}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-4'>
          <Button type="primary" shape="round" variant="solid"
            style={{ color: 'black', fontWeight: '500', fontSize: '18px', height: '40px', paddingLeft: '30px', paddingRight: '30px' }}
          >
            บันทึก
          </Button>
        </div>
        <p className='text-xs mt-3'>
          เมื่อดำเนินการต่อจะถือว่าคุณยินยอมให้ Spotiky เข้าใช้งานรูปที่คุณเลือกอัปโหลด โปรดตรวจสอบให้แน่ใจว่าคุณมีสิทธิ์ถูกต้องที่จะอัปโหลดรูปภาพนี้
        </p>
      </div>
    </div>
  )
}

export default EditDisplayCoverModel