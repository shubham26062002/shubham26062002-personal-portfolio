import ToasterContext from '@/context/ToasterContext'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import localFont from 'next/font/local'

const lexend = Lexend({
  subsets: ['latin'],
})

// Local gliker fonts configuration.
const gliker = localFont({
  src: [{
    path: '../assets/fonts/gliker/Gliker-Regular.woff2',
    weight: '400',
    style: 'normal',
  }, {
    path: '../assets/fonts/gliker/Gliker-SemiBold.woff2',
    weight: '600',
    style: 'normal',
  }, {
    path: '../assets/fonts/gliker/Gliker-Bold.woff2',
    weight: '700',
    style: 'normal',
  }, {
    path: '../assets/fonts/gliker/Gliker-Black.woff2',
    weight: '900',
    style: 'normal',
  }],
  display: 'swap',
  variable: '--font-gliker',
})

// Change metadata in the future.
export const metadata: Metadata = {
  title: 'Shuham Patel - Aspiring Web Developer',
  description: 'Explore the impressive portfolio of Shubham Patel, a skilled full-stack developer specializing in Next.js and PostgreSQL. Discover captivating web applications, clean code, and seamless user experiences that exemplify the fusion of creativity and technical expertise.',
  keywords: 'Shubham Patel, Shubham, Web Developer, Full-Stack Developer, Next.js, PostgreSQL, React, TypeScript, JavaScript, HTML, CSS, TailwindCSS, Node.js, Supabase, Git, GitHub, Vercel, Portfolio, Projects, Blog, Resume, Contact, About, Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={gliker.variable}>
      <body className={lexend.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  )
}
