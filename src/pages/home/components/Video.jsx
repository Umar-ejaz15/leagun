import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import React from 'react'


const Video = () => {
    return (
        <div className='w-full'>
            <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="/video.mp4"
                thumbnailSrc='/pic.png'
                thumbnailAlt="Dummy Video Thumbnail"
            />
        </div>
    )
}

export default Video
