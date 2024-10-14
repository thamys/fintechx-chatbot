'use client';
import React from 'react';
import Loading from './components/Loading';

const SplashScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loading />
    </div>
  );
};

export default SplashScreen;