import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ujwal T B - Front-end Developer Portfolio',
  description: 'Passionate Front-end Developer with 3+ years of experience in building dynamic, responsive web applications. Proficient in React.js, Next.js, TypeScript, and modern front-end technologies.',
  icons: {
    icon: '/images/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
        <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
