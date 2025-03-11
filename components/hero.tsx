import VideoThumb from '@/public/images/thumb_edit.png'
import ModalVideo from '@/components/modal-video'
import bg from '@/public/images/bg.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
          <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80" 
          width="100vw"
          height="100%"
          xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
        <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
        <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
        <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
        <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
        <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
        <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
        <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
        <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
        <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
      </radialGradient>
    </defs>
    <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
      <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
    </rect>
    <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
      <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
    </rect>
    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
      <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
    </rect>
    </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> Embrace the Blockchain Revolution <br></br><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">DevFest Kampala 2024</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Empowering Developers, Igniting Innovation, and Building Solutions for Africa's Future</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.unlock-protocol.com/event/block-chain-dev-fest" target="_blank" rel="noopener noreferrer">REGISTER</a>
                </div>
                <div>
                  <a className="btn text-white bg-red-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://forms.gle/oqPys2jHZw3ub2JN7" target="_blank" rel="noopener noreferrer">HACK</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/devfest.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}