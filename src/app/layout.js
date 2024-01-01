import { Handlee } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const handlee = Handlee({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: 'Snappy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={handlee.className}>
        <section className="container">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
