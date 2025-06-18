


import VideoThumb from "@/public/images/thumb_edit.png";
import ModalVideo from "@/components/modal-video";
import ImageCarousel from "@/components/image-carousel";



export default function Hero() {
  const carouselImages = [
    "/images/hack1.jpg",
    "/images/basePic.jpg",
    "/images/hack3.jpg",
    "/images/starknetPic.jpg",
    "/images/unlockPic.jpg",
    "/images/hack2.jpg",
    "/images/hack4.jpg",
  ];

  return (
    <section className="relative ">
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-20">
        <ImageCarousel
          images={carouselImages}
          interval={5000}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 -z-10 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 text-center pt-80">
        <h1
          className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl leading-tight"
          data-aos="fade-up"
        >
          Embrace the Blockchain Revolution
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            DevFest Kampala 2025
          </span>
        </h1>

        <p
          className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mt-6 max-w-2xl drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Empowering Developers, Igniting Innovation, and Building Solutions for Africa's Future
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            className="btn text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg shadow-lg transition"
            href="https://app.unlock-protocol.com/event/block-chain-developer-festival-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER
          </a>
          <a
            className="btn text-white bg-red-800 hover:bg-red-900 px-8 py-3 rounded-full text-lg shadow-lg transition"
            href="https://lu.ma/veliqhyg"
            target="_blank"
            rel="noopener noreferrer"
          >
            HACK
          </a>
        </div>

        {/* Video Section */}
        <div className="mt-16 max-w-4xl w-full" data-aos="fade-up" data-aos-delay="600">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/devfest.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}







