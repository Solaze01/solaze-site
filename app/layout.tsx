import type { Metadata, Viewport } from 'next'
import { DM_Sans, Lora } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Solaze — You Don\'t Have to Carry It Alone',
  description: 'Solaze is a student-led emotional support platform. Share your story anonymously, receive human guidance, and find strength in community.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2F6F62',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
