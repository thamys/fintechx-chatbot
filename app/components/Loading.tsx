'use client';
import { Typography } from 'antd';
import Image from 'next/image';
import React from 'react';
const { Title, Text } = Typography;

const Loading = () => {
  return (
    <div className='p-10 h-screen w-screen flex flex-col justify-center items-center'>
      <Image
        className='flex-grow h-full'
        alt="Logo"
        src="/assets/logo-inverted.svg"
        width={119}
        height={142}
      />
      <div className='text-center'>
        <Title className='!mb-0' level={2}>BrainBox</Title>
        <Text type='secondary'>Version 1.0</Text>
      </div>
    </div>
  );
};

export default Loading;