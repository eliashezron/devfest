import './css/style.css'

import { Inter } from 'next/font/google'

import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'DevFest Kampala - Africa\'s Premier Developer Conference',
  description: 'DevFest provides a platform that showcases developers and founding teams, upskills community managers, and provides investors with industry insights. Connect Africa\'s thriving developer ecosystem with global blockchain companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
