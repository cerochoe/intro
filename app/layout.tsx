import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'] 
})

export const metadata: Metadata = {
  title: 'Jeongbin Cero Choe',
  description: 'anti-apple'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
