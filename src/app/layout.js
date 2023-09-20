import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '../../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alzaen dev',
  description: 'project learn nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>  
        <AuthProvider>
        <div className="container">
        <Navbar/>
        {children}  
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
