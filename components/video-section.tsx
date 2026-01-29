'use client';

import { useEffect, useRef } from 'react';
import BlockchainBackground from '@/components/blockchain-background';

export default function VideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure autoplay works by setting the iframe src after mount
    if (iframeRef.current) {
      const videoId = 'kpxQBz6KSQk';
      const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0`;
      iframeRef.current.src = autoplayUrl;
    }
  }, []);

  return (
    <section className="relative w-full py-0 flex items-center justify-center -mt-12 md:-mt-16 lg:-mt-20 overflow-hidden">
      <BlockchainBackground />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl lg:rounded-[2rem] overflow-hidden">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src=""
            title="DevFest Kampala 2026 Video"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            style={{
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
