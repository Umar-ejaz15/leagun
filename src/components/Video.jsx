import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import React from 'react';

const Video = () => {
  return (
    <div className="w-full flex justify-center">
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="/video.mp4"
        thumbnailSrc="/pic.png"
        thumbnailAlt="Demo Video Thumbnail"
      />
    </div>
  );
};

export default Video;
