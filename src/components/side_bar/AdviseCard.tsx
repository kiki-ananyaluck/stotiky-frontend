"use client"
import React from 'react';
import { Card, Button } from 'antd';

interface AdviseCardProps {
  text: {
    title: string;
    description: string;
    title_button: string;
  };
}

const AdviseCard: React.FC<AdviseCardProps> = ({ text }) => {
  return (
    <div className='my-4'>
      <Card style={{ width: '100%',backgroundColor: '#2A2A2A', }} >
        <h3 className='mb-2'>{text.title}</h3>
        <p className='mb-2'>{text.description}</p>
        <Button
          type="primary"
          shape="round"
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: '14px',
            height: '30px',
          }}
        >
          {text.title_button}
        </Button>
      </Card>
    </div>
  );
};

export default AdviseCard;
