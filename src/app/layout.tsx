import './globals.css'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

const font = Roboto({ weight:['400',"500","700"],subsets:['latin'] })

export const metadata: Metadata = {
  title: 'Ez Ireland',
  description: '爱尔兰信息整合平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
