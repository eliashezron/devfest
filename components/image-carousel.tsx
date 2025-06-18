"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageCarouselProps {
  images: string[]
  interval?: number
  className?: string
}

export default function ImageCarousel({ images, interval = 5000, className = "" }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex)
        setNextImageIndex((nextImageIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 1000) // Transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [currentImageIndex, nextImageIndex, images.length, interval])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex
              ? "opacity-100 z-10"
              : index === nextImageIndex && isTransitioning
                ? "opacity-70 z-20"
                : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Carousel image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

