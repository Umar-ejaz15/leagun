"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export default function HeroVideoInline({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn("relative w-full max-w-3xl mx-auto", className)}>
      {!isPlaying ? (
        <button
          type="button"
          aria-label="Play video"
          className="relative w-full cursor-pointer border-0 bg-transparent p-0 group"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full rounded-xl border shadow-lg transition-all duration-200 group-hover:brightness-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-24 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
              <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <Play className="size-8 text-white fill-white" />
              </div>
            </div>
          </div>
        </button>
      ) : (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border">
          <iframe
            src={`${videoSrc}?autoplay=1`}
            title="Hero Video Player"
            className="w-full h-full rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
