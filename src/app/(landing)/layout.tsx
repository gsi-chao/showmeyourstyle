import Header from '@/sections/Landing/components/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show me your style',
  description: 'Unleash your style with AI-driven fashion creations',
  keywords: [
    'AI fashion',
    'style',
    'fashion creations',
    'personalized fashion',
    'cloudinary',
    'midudev',
  ],
  authors: [
    { name: 'Carlos Chao Cortes', url: 'https://youtube.com/@ElFrontend' },
    { name: 'Abel Rodriguez', url: '' },
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Show me your style',
    description: 'Unleash your style with AI-driven fashion creations',
    url: 'https://showmeyourstyle.vercel.app',
    type: 'website',
    images: [
      {
        url: '/images/logo.svg',
        width: 800,
        height: 600,
        alt: 'Show me your style',
      },
    ],
  },
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      {/* <HalloweenTheme /> */}
      {children}
    </div>
  )
}
