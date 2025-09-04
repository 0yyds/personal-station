'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number; // 0-100
}

export default function VideoBackground({ videoSrc, overlayOpacity = 50 }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 确保视频自动播放
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('视频自动播放失败:', error);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        您的浏览器不支持视频标签。
      </video>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black dark:opacity-70"
        style={{ opacity: overlayOpacity / 100 }}
      />
    </div>
  );
}